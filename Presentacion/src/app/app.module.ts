import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { ImagenComponent } from './Components/imagen/imagen.component';
import { InformacionPComponent } from './Components/informacion-p/informacion-p.component';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ImagenComponent,
    InformacionPComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
