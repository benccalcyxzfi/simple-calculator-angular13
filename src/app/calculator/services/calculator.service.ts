import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  //defines the constants used to identify calculation operations
  static readonly ADDITION: string = '+';
  static readonly SUBTRACTION: string = '-';
  static readonly DIVISION: string = '/';
  static readonly MULTIPLICATION: string = '*';
  constructor() { }
  calculate(num1: number, num2: number, operation: string): number {
    let result: number;//stores the result of the operation
    switch (operation) {
      case CalculatorService.ADDITION:
        result = num1 + num2;
        break;
      case CalculatorService.SUBTRACTION:
        result = num1 - num2;
        break;
      case CalculatorService.DIVISION:
        result = num1 / num2;
        break;
      case CalculatorService.MULTIPLICATION:
        result = num1 * num2;
        break;
      default:
        result = 0;
        break;
    }
    return result;
  }
}
