import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http:HttpClient
  ) { }
  getAll(){
    
  }
  getAllPromise(){
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=ipod#json/items",/*{
      headers:{

      }
    }*/).toPromise()
  }
  getDescItem(id:string){

    return this.http.get("https://api.mercadolibre.com/items/"+id+"/description#json").toPromise()
  }
  getById(id:string){
    /**/
    
    return this.http.get("https://api.mercadolibre.com/items/"+id).toPromise()
  }
}
