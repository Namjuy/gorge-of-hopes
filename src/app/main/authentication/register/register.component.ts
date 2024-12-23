import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cccd: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^\d{9,10}$/)],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [
        '',
        [Validators.required, this.matchValues('password')],
      ],
    });
  }

  control(name: string) {
    return this.registerForm.get(name);
  }

  matchValues(
    matchTo: string
  ): (control: any) => { [key: string]: boolean } | null {
    return (control: any) => {
      return control?.value === this.registerForm?.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
      // Handle form submission, e.g., send data to the server
    } else {
      console.log('Form is invalid');
    }
  }

  loginWithGoogle(): void {
    // Handle Google login
    console.log('Login with Google');
  }

  loginWithFacebook(): void {
    // Handle Facebook login
    console.log('Login with Facebook');
  }
}
