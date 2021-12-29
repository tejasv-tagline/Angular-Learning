import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-cards',
  templateUrl: './review-cards.component.html',
  styleUrls: ['./review-cards.component.scss'],
})
export class ReviewCardsComponent implements OnInit {
  @Input() reviewText: string = '';
  @Input() reviewWriter: string = '';
  
  constructor() {}

  ngOnInit(): void {}
}
