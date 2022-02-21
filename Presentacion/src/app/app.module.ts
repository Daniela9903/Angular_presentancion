import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { ImagenComponent } from './Components/imagen/imagen.component';

import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { InformacionPComponent } from './Components/informacion-p/informacion-p.component';
import { InfoMainComponent } from './Components/info-main/info-main.component';
import { ContactoComponent } from './components/contacto/contacto.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ImagenComponent,
    InformacionPComponent,
    FooterComponent,
    InfoMainComponent,
    ContactoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
