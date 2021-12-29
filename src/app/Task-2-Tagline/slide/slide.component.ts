import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  public imageBig: string =
    'https://taglineinfotech.com/wp-content/uploads/2021/11/hashtag-investing-screen-case.png';
  constructor() {}

  ngOnInit(): void {}
}
