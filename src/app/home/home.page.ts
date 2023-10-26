import { Component, OnInit } from '@angular/core';
import { Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  display :any;

  addToDisplay(value: string) {
    this.display += value;
  }
  deleteLastCharacter() {
    this.display = this.display.slice(0, -1);
  }
  calculate() {
    try {
      this.display = eval(this.display);
      return this.display
    } catch (e) {
      this.display = 'Error';
    }
    this.display
  }
ngOnInit(): void {
  this.display='';

}
  clear() {
    this.display='';

  }
  autoBracket() {
    if (!this.display) {
      this.display = '()';
    } else {
      let openBrackets = 0;
      let closeBrackets = 0;

      // Count the number of open and close brackets
      for (let char of this.display) {
        if (char === '(') {
          openBrackets++;
        } else if (char === ')') {
          closeBrackets++;
        }
      }

      // Add an open bracket if there are fewer open brackets than close brackets
      if (openBrackets <= closeBrackets) {
        this.display += '*(';
      } else {
        // Add a close bracket if there are fewer open brackets than close brackets
        this.display += ')';
      }
    }
  }
}

