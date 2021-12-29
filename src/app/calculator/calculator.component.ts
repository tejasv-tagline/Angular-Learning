import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  title = 'calculator';

  public number = document.getElementById('result');

  constructor() {}

  ngOnInit() {}

  /**
   * name
   */
  public btnunique(val) {
    let number = document.getElementById('result')['value'];
    let n = document.getElementById('result');
    n['value'] = number + val;
  }

  public calculation(value) {
    if (value == 'b') {
      let number = document.getElementById('result')['value'];
      number = number.substring(0, number.length - 1);
      document.getElementById('result')['value'] = number;
    } else if (value == 'clear') {
      document.getElementById('result')['value'] = ' ';
    } else if (value == 'equation') {
      let number = document.getElementById('result')['value'];
      let ans = eval(number);
      // console.log(ans);
      document.getElementById('result')['value'] = ' ';
      if (Number.isInteger(ans)) {
        document.getElementById('result')['value'] = parseFloat(ans);
      } else {
        document.getElementById('result')['value'] = ans.toFixed(2);
      }
    }
  }
}
