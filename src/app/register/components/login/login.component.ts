import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PasswordModule } from 'primeng/password';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    PasswordModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  passwordFieldType: string = 'password';

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

}
