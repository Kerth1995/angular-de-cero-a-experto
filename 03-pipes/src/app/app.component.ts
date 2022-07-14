import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nombre: string = 'Capitán América';
  public arreglo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
  public PI: number = Math.PI;
  public porcentaje: number = 0.234;
  public porcentajeDos: number = 0.235689;
  public salario: number = 1234.56789123
  public heroe={
    nombre: 'logan',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
  public miPromesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Se logro con exito');
    }, 5000);
  });
  public fecha: Date = new Date();
  public idioma: string = 'es';
  public nombreDos: string = 'JorDan KetH coTriNa';

  
}
