import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public loginService: LoginServiceService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(
          (response: number[] | null) => {
            if (response !== null) {
              this.loginService.setUsername(this.loginForm.value.username);
              this.loginService.setTransporterIds(response);
              this.router.navigate(['/startSim']);
            } else {
              // Login failed, display error message
              alert('Invalid username or password');
            }
          },
          error => {
            console.error('Login failed', error);
            alert('Login failed. Please try again later.');
          }
        );
    }
  }
  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     this.loginService.login(this.loginForm.value.username, this.loginForm.value.password)
  //       .subscribe((response: any) => {
  //         if (!response) {
  //           this.loginService.setUsername(this.loginForm.value.username);
  //           this.router.navigate(['/startSim']);
  //         } else {
  //           // Login failed, display error message
  //           alert('Invalid username or password');
  //         }
  //       });
  //   }
  // }
}
