import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
})
export class CardHeaderComponent implements OnInit {
  public ourServices: string = 'Our Services';
  public findOffers: string = 'Find the right offers for you';
  constructor() {}

  ngOnInit(): void {}
}
