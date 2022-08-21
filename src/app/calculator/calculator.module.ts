import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './components';
import { CalculatorService } from './services';


@NgModule({
  declarations: [
    CalculatorComponent
  ],
  exports: [
    CalculatorComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CalculatorService
  ]
})
export class CalculatorModule { }
