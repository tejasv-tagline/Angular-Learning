import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-header',
  templateUrl: './tech-header.component.html',
  styleUrls: ['./tech-header.component.scss'],
})
export class TechHeaderComponent implements OnInit {
  @Input() techHeading: string = 'Welcome Here';

  constructor() {}

  ngOnInit(): void {}
}
