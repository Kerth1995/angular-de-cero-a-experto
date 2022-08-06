import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { ClasesComponent } from './components/clases/clases.component';
import { DirectivasPersonalizadasComponent } from './components/directivas-personalizadas/directivas-personalizadas.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';

// import routing module
import { AppRoutingModule } from './app-routing';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    ClasesComponent,
    DirectivasPersonalizadasComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
