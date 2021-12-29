import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  public cardTopimage:string = "https://taglineinfotech.com/wp-content/uploads/2021/11/The-Most-imperious-SEO-Ranking-Factors-For-Your-Website.png";
  public cardTitle : string ="8 Best Ios Development Tools...";
  public cardText : string ="When it concerns the smartphone market, iOS has been one of the two most influential superpowers to be dealt with. ...";
  public cardFooter : string =" Tagline Infotech";
  constructor() { }

  ngOnInit(): void {
  }

}
