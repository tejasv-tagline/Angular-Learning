import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-header',
  templateUrl: './tech-header.component.html',
  styleUrls: ['./tech-header.component.scss'],
})
export class TechHeaderComponent implements OnInit {
  public techHeading: string = 'Our Technologies';
  constructor() {}

  ngOnInit(): void {}
}
