import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor(private CalculatorService:CalculatorService) { }

  ngOnInit(): void {
    
  }

}
