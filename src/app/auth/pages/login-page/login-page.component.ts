import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);

  private authService = inject(AuthService);

  public myForm: FormGroup = this.fb.group({
    email: ['lu@email.com', [Validators.required, Validators.email]],
    password: ['1234567', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    const { email, password } = this.myForm.value;

    this.authService.login(email, password).subscribe({
      next: (ok) => {
        Swal.fire('Login', 'You are login now', 'success');
      },
      error: (message) => {
        console.log({ LoginError: message });
        Swal.fire('Error', message, 'error');
      },
    });
  }
}
