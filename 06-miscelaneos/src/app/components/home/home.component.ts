import { Component, OnInit, 
        OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {

  constructor() {
    console.log("constructor");
  }

  ngOnChanges(){
    console.log("ngOnChanges");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

}
