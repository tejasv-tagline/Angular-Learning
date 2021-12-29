import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expirience-heading',
  templateUrl: './expirience-heading.component.html',
  styleUrls: ['./expirience-heading.component.scss'],
})
export class ExpirienceHeadingComponent implements OnInit {
  public experienceHeader: string = 'We have the experience';
  public expirienceText: string =
    'We have got the experience to make your dream come true, and these stats speak for themselves: we have 150+ clients worldwide in only three years, and we have worked on over 200 projects, all of which have been finished successfully and on schedule, with 100% client satisfaction. We also have 60K+ hours of freelancing experience.';
  constructor() {}

  ngOnInit(): void {}
}
