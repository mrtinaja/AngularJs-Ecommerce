import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  myForm:FormGroup
  constructor(
    private fb:FormBuilder,
    private _snackBar:MatSnackBar
  ) { 
    this.myForm=this.fb.group({
      nombre:["",[Validators.required]],
      correo:["",[Validators.required]],
      clave:["",[Validators.required,Validators.minLength(6)]],
    })
  }
  registrarse(){
    console.log(this.myForm.value)
    this._snackBar.open("Gracias por registrarse", "", {
duration:2000
    })
  }
  ngOnInit(): void {
  }

}
