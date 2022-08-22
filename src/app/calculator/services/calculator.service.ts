
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
  /**
   * method that calculates a mathematical operation given two numbers.
   * Supports addition, subtraction, multiplication and division operations.
   * @param num1 number
   * @param num2 number
   * @param operation string operation to be performed
   * @returns number Results of operation
   */
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
