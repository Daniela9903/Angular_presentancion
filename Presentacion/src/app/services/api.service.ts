import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../interface/api.modelo';


@Injectable({
  providedIn: 'root'
})


export class ApiService {

  URL: string ='http://localhost:5000/pintura';

  usuarios: Api[]=[]
  constructor(private http:HttpClient ) { 
    
  }

  getUser(){
    return this.http.get(this.URL);
  }

  getAll(){
    return this.usuarios;
  }

  addUser(user:Api){
    this.usuarios.push(user);
    console.log(this.usuarios);
  }

}
