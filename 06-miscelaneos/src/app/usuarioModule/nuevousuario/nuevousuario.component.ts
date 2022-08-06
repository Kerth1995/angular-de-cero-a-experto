import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevousuarioComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("componente NuevousuarioComponent");
    this.activatedRoute.params.subscribe(param => {
      console.log("recibimos parametro de la url ",  param);
    });

    this.activatedRoute.parent?.params.subscribe(data => {
      console.log("recibimos parametro de la url del componente padre ",  data);
    });
  }

}
