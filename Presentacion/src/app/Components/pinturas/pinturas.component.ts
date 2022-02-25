import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/interface/api.modelo';
import { FormBuilder, FormGroup,ReactiveFormsModule} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pinturas',
  templateUrl: './pinturas.component.html',
  styleUrls: ['./pinturas.component.css']
})
export class PinturasComponent {

  formulario = this.nuevoFormualario.group({ //inicializar en 0 
    nombrePintura:'',
    nombreArtista:'',
    anioObra:'',
    paisArtista:''
  });

  usuarios:Api[]=[];

  constructor(private nuevoFormualario:FormBuilder,private ApiService:ApiService){
  }

  Guardar(){ 
    let nuevoUser : Api = {
        nombrePintura :this.formulario.get('nombrePintura')?.value,
        nombreArtista:this.formulario.get('nombreArtista')?.value,
        anioObra:this.formulario.get('anioObra')?.value,
        paisArtista:this.formulario.get('paisArtista')?.value, 
    }

}

}

   

