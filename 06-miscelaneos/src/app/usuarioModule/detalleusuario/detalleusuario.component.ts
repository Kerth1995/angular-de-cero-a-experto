import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalleusuario',
  templateUrl: './detalleusuario.component.html',
  styleUrls: ['./detalleusuario.component.css']
})
export class DetalleusuarioComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("componente DetalleusuarioComponent");
    this.activatedRoute.params.subscribe(param => {
      console.log(param);
    });

    this.activatedRoute.parent?.params.subscribe(data => {
      console.log("recibimos parametro de la url del componente padre ",  data);
    });
  }

}
