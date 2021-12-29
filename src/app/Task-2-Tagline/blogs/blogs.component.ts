import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  @Input() photo: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() footer: string = '';
  
  constructor() {}

  ngOnInit(): void {}
}
