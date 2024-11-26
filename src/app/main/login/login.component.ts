import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatErrorStateMatcher } from '../../shared/interface/MatErrorStateMatcher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    password: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    cccd: ['', [Validators.pattern('^[0-9]{12}$')]], // Optional CCCD with pattern for 12 digits
    address: [''], // Optional address
  });
  matcher = new MatErrorStateMatcher();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  // Getter function to access form controls dynamically
  get control() {
    return (controlName: string) => this.loginForm.get(controlName);
  }
}
