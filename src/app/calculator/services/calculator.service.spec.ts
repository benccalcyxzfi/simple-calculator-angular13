import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('must ensure that 1 + 4 = 5',
    inject([CalculatorService], (service: CalculatorService) => {
      let soma = service.calculate(1, 4, CalculatorService.ADDITION);
      expect(soma).toEqual(5);
    })
  );

  it('must ensure that 1 - 4 = -3',
    inject([CalculatorService], (service: CalculatorService) => {
      let soma = service.calculate(1, 4, CalculatorService.SUBTRACTION);
      expect(soma).toEqual(-3);
    })
  );

  it('must ensure that 1 * 4 = 4',
    inject([CalculatorService], (service: CalculatorService) => {
      let soma = service.calculate(1, 4, CalculatorService.MULTIPLICATION);
      expect(soma).toEqual(4);
    })
  );

  it('must ensure that 1 / 4 = 0.25',
    inject([CalculatorService], (service: CalculatorService) => {
      let soma = service.calculate(1, 4, CalculatorService.DIVISION);
      expect(soma).toEqual(0.25);
    })
  );

  it('must return 0 to inválid operation',
    inject([CalculatorService], (service: CalculatorService) => {
      let soma = service.calculate(1, 4, '%');
      expect(soma).toEqual(0);
    })
  );

});
