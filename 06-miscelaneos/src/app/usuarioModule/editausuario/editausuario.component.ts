import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editausuario',
  templateUrl: './editausuario.component.html',
  styleUrls: ['./editausuario.component.css']
})
export class EditausuarioComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("componente EditausuarioComponent");
    this.activatedRoute.params.subscribe(param => {
      console.log(param);
    });

    this.activatedRoute.parent?.params.subscribe(data => {
      console.log("recibimos parametro de la url del componente padre ",  data);
    });
  }

}
