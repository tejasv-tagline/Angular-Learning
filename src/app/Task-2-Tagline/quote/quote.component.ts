import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  public quoteText: string =
    "The team has delivered an impressive product that's endowed with many different functionalities. In the ongoing engagement, Tagline infotech has never encountered a problem that they couldn't tackle. They've proved to be flexible and responsive partners that the client can continue to rely on. Steve Lamar, CEO, Promoprep Although the project is still underway, TaglineInfotech has established themselves as reliable and experienced development partners. In the past, they've delivered high-quality work and have built a strong partnership. They work around the clock when needed and are always communicative.Justin Hall, CEO, SupplementSnoop The project managed to surpass the expectations of the company's management, as the team integrated extra features into the build. The team was able to meet all their milestones. The communication and rapport between both parties was good. Ramsey Ajram, Head of Product, Beans TaglineInfotech managed to finish the demo successfully and in a timely manner. The team was able to provide great and direct communication throughout the project. They were able to utilize new technologies that are available in the development industry.Fabio, Co-founder, Ticketing Software Company Tagline Infotech is a wonderful and customer centric company. Their developer Divangi that we worked with, was great. Very kind and professional. As a UK based company, we had certain doubts when it came to working with international software development companies. Especially India was unknown for us because of the distance and very different culture and some UK companies that had issue working with India based software companies. Tagline infotech is different and I am so glad I found them. I loved their 100% customer centric approach and their amazing CTO Ajay who was always available to discuss any feedback and make us as customers happy. They customer centric approach is definitely very unique and I did not have many other companies that are dedicated so much to clients’ satisfaction. I simply enjoyed working with them and I highly recommend them for any software projects. I am looking forward to working with them very soon again.";
  public ownerName: string = 'Milenko Pilic';
  public ownerPost: string = ', CEO, HeySuccess';
  constructor() {}

  ngOnInit(): void {}
}
