import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formtext',
  templateUrl: './formtext.component.html',
  styleUrls: ['./formtext.component.scss'],
})
export class FormtextComponent implements OnInit {
  public smallText: string = 'A Place Where Your IDEAS transform into REALITY';
  public bigText: string =
    "Let's talk about your project with Tagline Infotech Expert team";
  constructor() {}

  ngOnInit(): void {}
  s;
}
