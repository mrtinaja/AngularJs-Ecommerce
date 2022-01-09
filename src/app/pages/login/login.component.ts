import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup
  constructor(
    private fb:FormBuilder
  ) { 
   
    this.myForm=this.fb.group({
      nombre:["",[Validators.required]],
      correo:["",[Validators.required]],
      clave:["",[Validators.required,Validators.minLength(6)]],
    })
  }
  Ingresar(){
   
  }
  ngOnInit(): void {
  }

}