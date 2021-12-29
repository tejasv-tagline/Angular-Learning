import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expirience',
  templateUrl: './expirience.component.html',
  styleUrls: ['./expirience.component.scss'],
})
export class ExpirienceComponent implements OnInit {
  @Input() employee: string = '1';
  @Input() degree: string = '';
  @Input() icons: string = '';
  
  constructor() {}

  ngOnInit(): void {}
}
