import {
  Component,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-parent-life',
  templateUrl: './parent-life.component.html',
  styleUrls: ['./parent-life.component.scss'],
})
export class ParentLifeComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  public childMessage: string = 'no this is last child';

  displayChild: boolean = false;

  constructor() {
    console.log('AppComponent: Constructor');
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('AppComponent: OnChanges', changes);
  }

  ngOnInit() {
    console.log('AppComponent: OnInit');
  }

  ngDoCheck() {
    console.log('AppComponent: DoCheck');
  }

  ngAfterContentInit() {
    console.log('AppComponent: AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('AppComponent:AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('AppComponent:AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('AppComponent:AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('AppComponent:OnDestroy');
  }
}
