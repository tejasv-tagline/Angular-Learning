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
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child-life',
  templateUrl: './child-life.component.html',
  styleUrls: ['./child-life.component.scss'],
})
export class ChildLifeComponent implements OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  displayChild: boolean = false;

  constructor() {
    console.log("CȟildComponent: Constructor");
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log("CȟildComponent: OnChanges",changes);
  }

  ngOnInit() {
    console.log("CȟildComponent: OnInit");
  }

  ngDoCheck() {
    console.log("CȟildComponent: DoCheck");
  }

  ngAfterContentInit() {
    console.log("CȟildComponent: AfterContentInit");
  }

  ngAfterContentChecked() {
  console.log("CȟildComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
  console.log("CȟildComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("CȟildComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("CȟildComponent:OnDestroy");
  }
  @Input() message: string = '';
  // constructor() {}

  // ngOnInit(): void {}
}
