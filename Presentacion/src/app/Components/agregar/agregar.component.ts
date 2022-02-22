import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formulario = this.formBuilder.group({
    name_movie: '',
    ani: '',
    direc:'',
    person:'',
  });

  nombre_peli:string = "";
  ani_estreno:string = "";
  director:string= "";
  personaje:string = "";


  status = false;

  constructor(private formBuilder: FormBuilder,) { 
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.status = true
    this.nombre_peli = this.formulario.get('name_movie')?.value
    this.ani_estreno = this.formulario.get('anio')?.value
  }

}
