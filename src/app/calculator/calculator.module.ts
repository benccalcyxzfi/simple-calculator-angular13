import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './components';



@NgModule({
  declarations: [
    CalculatorComponent
  ],
  exports: [
    CalculatorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalculatorModule { }
