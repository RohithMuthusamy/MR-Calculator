import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  currentNumber = '0';
  firstOperand: any;
  operator: any;
  waitForSecondNumber = false;


  public getNumber(v: string) {
    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = v : this.currentNumber += v;

    }
  }
  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  private doCalculation(op: any, secondOp: number) {
    switch (op) {
      case '+':
        return this.firstOperand += secondOp;
      case '%':
        return this.firstOperand %= secondOp;
      case '-':
        return this.firstOperand -= secondOp;
      case '*':
        return this.firstOperand *= secondOp;
      case '/':
        return this.firstOperand /= secondOp;
      case '=':
        return secondOp;
    }
  }

  public getOperation(op: string) {

    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);

    } else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
  }

  public clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
  delete(currentNum:any) {
    return this.currentNumber= currentNum.slice(0,-1)
    }
  constructor(private router: Router) {
    this.clear()
   }
about(){
this.router.navigate(['/about'])
}
  ngOnInit(): void {
  }

}

