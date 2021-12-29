import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-text',
  templateUrl: './slide-text.component.html',
  styleUrls: ['./slide-text.component.scss'],
})
export class SlideTextComponent implements OnInit {
  public slideLogo: string =
    'https://pngimg.com/uploads/amazon/amazon_PNG24.png';
  public slideWords: string = 'Words From Our Clientele';
  public slidePara1: string =
    "Good things come for those who work hard, and that's why our clientele appreciate our efforts. Tagline Infotech provides the best services to the clients, and it is reflected through our ratings and reviews on various platforms.";
  public slidePara2: string =
    'We are a well-known IT services company on Clutch. Check out what our customers have to say about our services. Read their ratings, feedback and stories about partnering with us before making your own decision.';
  constructor() {}

  ngOnInit(): void {}
}
