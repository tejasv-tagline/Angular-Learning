import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-cards-text',
  templateUrl: './review-cards-text.component.html',
  styleUrls: ['./review-cards-text.component.scss']
})
export class ReviewCardsTextComponent implements OnInit {

  public reviewText:string='"They understand complex technical requirements,and they have a team that quickly gets up to speed"'
  constructor() { }

  ngOnInit(): void {
  }

}
