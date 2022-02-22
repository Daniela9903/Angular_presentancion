import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formulario = this.formBuilder.group({
    name: '',
    email: '',
    asunto:'',
    descrpcion:'',
  });

  nombre:string = "";
  email:string = "";
  asunto:string= "";
  descripcion:string = "";


  status = false;

  constructor(private formBuilder: FormBuilder,) { 
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.status = true
    this.nombre = this.formulario.get('name')?.value
    this.asunto = this.formulario.get('asunto')?.value
  }

}
