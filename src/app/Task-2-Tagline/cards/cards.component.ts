import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() photo: string = '';
  // public cardPhoto:string ="https://storage.googleapis.com/website-production/uploads/2018/11/facebook-link-format-770x384.jpg";
  @Input() button: string = '';

  constructor() {}

  ngOnInit(): void {}
}
