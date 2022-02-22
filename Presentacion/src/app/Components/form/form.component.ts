import {Component} from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule} from '@angular/forms';
import { User } from 'src/app/interface/user.modelo';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})



export class FormComponent{

  formulario = this.nuevoFormualario.group({
    nombre:'',
    apellido:'',
    email:'',
    telefono:''
  });

usuarios:User[]=[];
constructor(private nuevoFormualario:FormBuilder){
}

Guardar(){
  let nuevoUser : User = {
      nombre :this.formulario.get('nombre')?.value,
      apellido:this.formulario.get('apellido')?.value,
      email:this.formulario.get('email')?.value,
      telefono:this.formulario.get('telefono')?.value, 
  }


  this.usuarios.push(nuevoUser);

  console.log(this.usuarios);
  this.limpiarForm();
}


limpiarForm(){
  //this.formulario.reset()
}



}
