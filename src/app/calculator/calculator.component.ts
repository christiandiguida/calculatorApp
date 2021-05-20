import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  calculatorScreen: string = '';
  firstValue: number = undefined;
  result: number = undefined;
  operator: string = '';
  operations = {
    '+': function (num1: number, num2: number) {
      return num1 + num2;
    },
    '-': function (num1: number, num2: number) {
      return num1 - num2;
    },
    '*': function (num1: number, num2: number) {
      return num1 * num2;
    },
    '/': function (num1: number, num2: number) {
      return num1 / num2;
    },
  };

  insertValueByKey(event) {
    console.log(event);
  }
  insertValue(value: string) {
    if (this.calculatorScreen === `${this.result}`) {
      this.calculatorScreen = '';
    }
    this.calculatorScreen += value;
  }

  sum() {
    if (this.calculatorScreen !== '') {
      this.firstValue = parseFloat(this.calculatorScreen);
      this.calculatorScreen = '';
      this.operator = '+';
    }
  }
  subtraction() {
    if (this.calculatorScreen !== '') {
      this.firstValue = parseFloat(this.calculatorScreen);
      this.calculatorScreen = '';
      this.operator = '-';
    }
  }
  multiplication() {
    if (this.calculatorScreen !== '') {
      this.firstValue = parseFloat(this.calculatorScreen);
      this.calculatorScreen = '';
      this.operator = '*';
    }
  }
  division() {
    if (this.calculatorScreen !== '') {
      this.firstValue = parseFloat(this.calculatorScreen);
      this.calculatorScreen = '';
      this.operator = '/';
    }
  }

  equal() {
    if (this.calculatorScreen !== '') {
      if (this.result > 100000000000) {
        this.calculatorScreen = 'Error';
      } else {
        this.result = this.operations[this.operator](
          this.firstValue,
          parseFloat(this.calculatorScreen)
        );
        this.calculatorScreen = `${this.result}`;
      }
    }
  }

  del() {
    this.calculatorScreen = this.calculatorScreen.slice(0, -1);
  }

  reset() {
    this.calculatorScreen = '';
    this.firstValue = undefined;
    this.result = undefined;
  }

  constructor() {}

  ngOnInit(): void {}
}
