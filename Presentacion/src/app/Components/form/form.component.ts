import {Component} from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule} from '@angular/forms';
import { User } from 'src/app/interface/user.modelo';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})



export class FormComponent{

  formulario = this.nuevoFormualario.group({ //inicializar en 0 
    nombre:'',
    apellido:'',
    email:'',
    telefono:''
  });

usuarios:User[]=[];
constructor(private nuevoFormualario:FormBuilder,private UserService:UserService){
}

Guardar(){ 
  let nuevoUser : User = {
      nombre :this.formulario.get('nombre')?.value,
      apellido:this.formulario.get('apellido')?.value,
      email:this.formulario.get('email')?.value,
      telefono:this.formulario.get('telefono')?.value, 
  }


  this.UserService.addUser(nuevoUser);

  console.log(this.usuarios);
  this.limpiarForm();
}


limpiarForm(){
  //this.formulario.reset()
}



}
