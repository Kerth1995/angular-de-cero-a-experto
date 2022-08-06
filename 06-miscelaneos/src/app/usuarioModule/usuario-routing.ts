import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetalleusuarioComponent } from "./detalleusuario/detalleusuario.component";
import { EditausuarioComponent } from "./editausuario/editausuario.component";
import { NuevousuarioComponent } from "./nuevousuario/nuevousuario.component";
import { UsuarioComponent } from "./usuario/usuario.component";


const app_routes: Routes = [
    {path: '', component:UsuarioComponent,
      children:[
        {path: 'nuevo/:id', component:NuevousuarioComponent},
        {path: 'editar/:id', component:EditausuarioComponent},
        {path: 'detalle/:id', component:DetalleusuarioComponent},
        { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
      ]
    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forChild(app_routes)],
    exports: [RouterModule]
})

export class UsuarioRoutingModule { }