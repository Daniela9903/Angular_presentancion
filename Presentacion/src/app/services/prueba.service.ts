import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  URL: string ='http://localhost:5000/pintura';

  

  constructor(private http:HttpClient ) { 
    console.log('Holaaaaaa')
  }


   getObras() :Observable<any>{
    return this.http.get<any>(this.URL);
   }


  //  postObras(){
  //   return this.http.post<any>(this.URL);
  //  }

   
}
