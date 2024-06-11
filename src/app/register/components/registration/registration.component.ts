import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import {  FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { NgIf } from '@angular/common'; 
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    InputTextModule,
    MultiSelectModule,
    FormsModule,
    DropdownModule,
    PasswordModule,
    CheckboxModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;
  registerForm : FormGroup;

  constructor(private formBuilder : FormBuilder){
    this.registerForm = this.formBuilder.group({
      name : ['' , Validators.required],
      email:['' , [Validators.required , Validators.email]],
      phoneNumber : ['' , [Validators.required , Validators.minLength(8)]],
      password : ['', [Validators.required , Validators.minLength(8)]],
      confirmPassword : ['' , [Validators.required , Validators.minLength(8)]],
      terms: [false, Validators.requiredTrue] 
    })
  }

  cities =[
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ]

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

}
