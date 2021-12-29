import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-photo',
  templateUrl: './cover-photo.component.html',
  styleUrls: ['./cover-photo.component.scss'],
})
export class CoverPhotoComponent implements OnInit {
  public coverPhoto: string =
    'https://taglineinfotech.com/wp-content/uploads/2021/09/main-header-bg.webp';
  constructor() {}

  ngOnInit(): void {}
}
