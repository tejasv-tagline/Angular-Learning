import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quoteimage',
  templateUrl: './quoteimage.component.html',
  styleUrls: ['./quoteimage.component.scss']
})
export class QuoteimageComponent implements OnInit {

  public quoteImage:string = "https://www.tenethealth.com/images/global/tenethealth/about-stat-03-min.png?sfvrsn=5b078f1b_0"
  constructor() { }

  ngOnInit(): void {
  }

}
