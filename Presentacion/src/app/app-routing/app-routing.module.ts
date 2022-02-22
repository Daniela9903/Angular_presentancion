import { NgModule } from '@angular/core';
import { PrincipalComponent } from '../Components/principal/principal.component';
import { RouterModule, Routes } from '@angular/router';
import { InfoMainComponent } from '../Components/info-main/info-main.component';
import { FormComponent } from '../Components/form/form.component';
import { ContactoComponent } from '../components/contacto/contacto.component';
import { AgregarComponent } from '../components/agregar/agregar.component';


const routes : Routes = [
  {
    path:'home',
    component:PrincipalComponent 
  },
  
  { path:"informacion",
    component:InfoMainComponent  },

  { path:"form",
   component:FormComponent  },

   { path:"contacto",
   component:ContactoComponent  },

   { path:"agregar",
   component:AgregarComponent},

  { path:"**", redirectTo: "home"},//Ruta para direccionar siempre a home 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
