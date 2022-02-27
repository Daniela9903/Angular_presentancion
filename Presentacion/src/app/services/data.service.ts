import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL: string ='http://localhost:5000/pintura';

  constructor(private http:HttpClient) { }


  getPost(){
    return this.http.get(this.URL);
    
  }
}
