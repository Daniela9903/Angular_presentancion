import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {
  imgenSrc:string="./assets/perfil.jpg"
  name:string="Daniela Rosas Tomé"
  constructor() { }

  ngOnInit(): void {
  }

}
