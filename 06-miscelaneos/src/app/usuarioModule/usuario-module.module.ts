import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing';
import { RouterModule } from '@angular/router';
import {UsuarioComponent} from './usuario/usuario.component'
import {EditausuarioComponent} from './editausuario/editausuario.component'
import {DetalleusuarioComponent} from './detalleusuario/detalleusuario.component'
import {NuevousuarioComponent} from './nuevousuario/nuevousuario.component'

@NgModule({
  declarations: [
    UsuarioComponent,
    EditausuarioComponent,
    DetalleusuarioComponent,
    NuevousuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    RouterModule
  ]
})
export class UsuarioModuleModule { }
