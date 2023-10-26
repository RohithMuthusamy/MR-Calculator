import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: ['./bmi.page.scss'],
})
export class BmiPage implements OnInit {


  weight: any;
  height: any;
  bmi: any;
  constructor() {
  }

  ngOnInit() {
    this.bmi = null;

  }
  bmiCalculator(val:any) {
    if (this.height && this.weight != 0) {
      this.height = val.form.value.height;
      this.weight = val.form.value.weight;
      this.bmi = Number(((this.weight / this.height / this.height) * 10000).toFixed(2));
    }
  }
  valNull() {
    this.height = null;
    this.weight = null;
    this.bmi = null;
  }
}
