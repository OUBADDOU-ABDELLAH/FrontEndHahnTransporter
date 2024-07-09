import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginServiceService } from '../login-service.service';
import { StartSimService } from '../start-sim.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-start-simulation',
  templateUrl: './start-simulation.component.html',
  styleUrls: ['./start-simulation.component.css']
})
export class StartSimulationComponent implements OnInit {
  transporterIds: number[] = [];
  username: string | null = null;
  transporterId! : number ;
  constructor(private loginService:LoginServiceService,private startSimService : StartSimService , private router: Router ) {
    
  }


  ngOnInit(): void {
    this.loginService.getTransporterIds().subscribe(ids => {
      this.transporterIds = ids;
      if (this.transporterIds.length === 1) {
        this.transporterId = this.transporterIds[0];
      }
    });

    this.loginService.getUsername().subscribe(username => {
      this.username = username;
    });
  }
  onSubmit(): void {
    if (this.username && this.transporterId) {
      this.startSimService.StartSim(this.username, this.transporterId)
        .subscribe((response: any) => {
          if (!response) {
            this.router.navigate(['/allAcceptedOrders']);
          } else {
            // Simulation start failed, display error message
            alert('Failed to start simulation');
          }
        });
    } else {
      alert('Please select a transporter ID');
    }
  }
}
