import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { ImagenComponent } from './Components/imagen/imagen.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { InformacionPComponent } from './Components/informacion-p/informacion-p.component';
import { InfoMainComponent } from './Components/info-main/info-main.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './Components/form/form.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoComponent } from './components/listado/listado.component';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ImagenComponent,
    InformacionPComponent,
    FormComponent,
    FooterComponent,
    InfoMainComponent,
    ContactoComponent,
    AgregarComponent,
    ListadoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
