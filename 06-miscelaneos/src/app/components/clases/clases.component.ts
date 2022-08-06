import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  alertClass: string = 'alert-primary';
  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  loadData(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }

}
