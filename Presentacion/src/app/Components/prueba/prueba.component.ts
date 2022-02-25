import { Component} from '@angular/core';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent{
  

  constructor(private pruebaService:PruebaService) { }

  ngOnInit(): void {
   this.getTodo()
  
  }

  getTodo(){
    return this.pruebaService.getObras().subscribe(
      res =>{
        console.log(res);
      }
    )
  }

}
