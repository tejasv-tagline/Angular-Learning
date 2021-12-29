import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent implements OnInit {
  // public flutterImage:string="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png";
  // @Input() public img: string = '';
  @Input() photo: string = '';
  // public angularImage:string="https://icon2.cleanpng.com/20180806/thy/kisspng-logo-angularjs-computer-icons-font-angular-make-it-5b686828275968.4673764315335690641612.jpg";
  // public pythonImage:string="https://mpng.subpng.com/20180804/loe/kisspng-programming-in-python-3-a-complete-introduction-t-python-web-development-amp-technology-resource-5b663c2cebcc63.9219693015334267329659.jpg";

  constructor() {}

  ngOnInit(): void {}
}
