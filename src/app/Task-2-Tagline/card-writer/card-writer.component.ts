import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-writer',
  templateUrl: './card-writer.component.html',
  styleUrls: ['./card-writer.component.scss'],
})
export class CardWriterComponent implements OnInit {
  public cardWriter: string = 'Founder Cimpro.io';
  constructor() {}

  ngOnInit(): void {}
}
