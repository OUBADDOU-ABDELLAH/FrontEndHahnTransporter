import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, interval, switchMap } from 'rxjs';
import { OrderDto, ResponseDto } from '../order.dto';
import { AcceptedordersService } from '../acceptedorders.service';
import { LoginServiceService } from '../login-service.service';
import { StopSimService } from '../stop-sim.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-acceptedorders',
  templateUrl: './acceptedorders.component.html',
  styleUrls: ['./acceptedorders.component.css']
})
export class AcceptedordersComponent implements OnInit, OnDestroy {

  acceptedOrders: OrderDto[] = [];
  coins: number = 0;
  username: string = ''; 
  private subscription!: Subscription;
  private usernameSubscription!: Subscription;
  private coinsSubscription!: Subscription;

  constructor(
    private stopSimService: StopSimService,
    private loginService: LoginServiceService,
    private acceptedOrdersService: AcceptedordersService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usernameSubscription = this.loginService.getUsername().subscribe((username: string | null) => {
      if (username) {
        this.username = username;
        // Fetch coins and accepted orders immediately
        this.fetchCoinsAndOrders();

        // Start interval to fetch coins and accepted orders every 5 seconds
        this.subscription = interval(5000).pipe(
          switchMap(() => this.acceptedOrdersService.getAllAcceptedOrders(this.username))
        ).subscribe((response: ResponseDto) => {
          this.acceptedOrders = response.orders;
          this.coins = response.coins;
        }, (error) => {
          console.error('Error fetching accepted orders:', error);
        });
      } else {
        console.error('Username is empty. Unable to fetch accepted orders.');
      }
    });
  }

  fetchCoinsAndOrders(): void {
    this.loginService.getCoins(this.username).subscribe((coins: number) => {
      this.coins = coins;
    });

    this.acceptedOrdersService.getAllAcceptedOrders(this.username).subscribe((response: ResponseDto) => {
      this.acceptedOrders = response.orders;
      this.coins = response.coins;
    }, (error) => {
      console.error('Error fetching accepted orders:', error);
    });
  }

  stopSimulation(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.stopSimService.StopSim(this.username).subscribe(() => {
          this.router.navigate(['/home']);
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.usernameSubscription) {
      this.usernameSubscription.unsubscribe();
    }
    if (this.coinsSubscription) {
      this.coinsSubscription.unsubscribe();
    }
  }
}
