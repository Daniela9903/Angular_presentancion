import { Component} from '@angular/core';
// import { PruebaService } from 'src/app/services/prueba.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent{
  
 mensajes: any[] = [];
  // constructor(private pruebaService:PruebaService) { }

  constructor(private dataService:DataService) { }
  

  
  ngOnInit(): void {
  //  this.getTodo()

  this.dataService.getPost()
  .subscribe((posts: any) =>{
    console.log(posts);
    this.mensajes = posts;
  })
  
  }

  // getTodo(){
  //   return this.pruebaService.getObras().subscribe(
  //     res =>{
  //       console.log(res);
  //     }
  //   )
  // }

}
