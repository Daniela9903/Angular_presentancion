import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-p',
  templateUrl: './informacion-p.component.html',
  styleUrls: ['./informacion-p.component.css']
})
export class InformacionPComponent implements OnInit {
  age:string="22"
  nationality="Mexicana"
  email="rosas.tome@gmai.com"
  phone="55-39-59-28-66"
  career="Ciencias de la informatica"
  movies="Lilo y stitch"
  hobbie="Tomar fotos"
  constructor() { }

  ngOnInit(): void {
  }

}
