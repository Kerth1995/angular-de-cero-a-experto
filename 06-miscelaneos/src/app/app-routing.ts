import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UsuarioModuleModule } from "./usuarioModule/usuario-module.module";


const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario/:cualquierDato',
      loadChildren: () => import('./usuarioModule/usuario-module.module').then(module => module.UsuarioModuleModule)
    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }