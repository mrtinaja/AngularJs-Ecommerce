import { Component, OnInit } from '@angular/core';
import "animate.css";

document.documentElement.style.setProperty('--animate-duration', '2s');

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
