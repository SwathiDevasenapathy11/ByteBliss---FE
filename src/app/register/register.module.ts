import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule
  ],
  exports:[FormsModule]
})
export class RegisterModule { }
