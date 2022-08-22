import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  private number1: string;
  private number2: string;
  private result: number;
  private operation: string;

  constructor(private CalculatorService: CalculatorService) { }

  ngOnInit() {
    this.clear();
  }

  /**
   * Initialize all operators to default values.
   *
   * @return void
   */
  clear(): void {
    this.number1 = '0';
    this.number2 = null;
    this.result = null;
    this.operation = null;
  }

  /**
   * Adds the selected number to the calculation later.
   *
   * @param string number
   * @return void
   */
  addNumber(number: string): void {
    if (this.operation === null) {
      this.number1 = this.concatenateNumber(this.number1, number);
    } else {
      this.number2 = this.concatenateNumber(this.number2, number);
    }
  }

  /**
   * Returns the concatenated value. Handles the decimal separator.
   *
   * @param string actualNumber
   * @param string concatNumber
   * @return string
   */
  concatenateNumber(actualNumber: string, concatNumber: string): string {
    // caso contenha apenas '0' ou null, reinicia o valor
    if (actualNumber === '0' || actualNumber === null) {
      actualNumber = '';
    }

    // first digit is '.', concatenates '0' before the dot
    if (concatNumber === '.' && actualNumber === '') {
      return '0.';
    }

    // case '.' typed and already contains a '.', it just returns
    if (concatNumber === '.' && actualNumber.indexOf('.') > -1) {
      return actualNumber;
    }

    return actualNumber + concatNumber;
  }

  /**
   * Executes logic when an operator is selected.
   * If you already have an operation selected, execute the
   * previous operation, and defines the new operation.
   *
   * @param string operation
   * @return void
   */
  setOperation(operation: string): void {
    // only defines the operation if there is no
    if (this.operation === null) {
      this.operation = operation;
      return;
    }

    /* case operation defined and number 2 selected,
        perform the calculation of the operation */
    if (this.number2 !== null) {
      this.result = this.CalculatorService.calculate(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.operation);
      this.operation = operation;
      this.number1 = this.result.toString();
      this.number2 = null;
      this.result = null;
    }
  }

  /**
   * Performs the calculation of an operation.
   *
   * @return void
   */
  calculate(): void {
    if (this.number2 === null) {
      return;
    }

    this.result = this.CalculatorService.calculate(
      parseFloat(this.number1),
      parseFloat(this.number2),
      this.operation);
  }

  /**
   * Returns the value to be displayed on the calculator screen.
   *
   * @return string
   */
  get display(): string {
    if (this.result !== null) {
      return this.result.toString();
    }
    if (this.number2 !== null) {
      return this.number2;
    }
    return this.number1;
  }

}
