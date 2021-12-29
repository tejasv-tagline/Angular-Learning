import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grow',
  templateUrl: './grow.component.html',
  styleUrls: ['./grow.component.scss'],
})
export class GrowComponent implements OnInit {
  public growText: string ='Let’s grow smarter with the smartest Web Development Company. Get a Free Quote';
  public getQuoe: string = "Get a quote";

  constructor() {}

  ngOnInit(): void {}
}
