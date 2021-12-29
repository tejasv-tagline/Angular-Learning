import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-cards-text',
  templateUrl: './review-cards-text.component.html',
  styleUrls: ['./review-cards-text.component.scss'],
})
export class ReviewCardsTextComponent implements OnInit {
  @Input() reviewText: string = '';
  
  constructor() {}

  ngOnInit(): void {}
}
