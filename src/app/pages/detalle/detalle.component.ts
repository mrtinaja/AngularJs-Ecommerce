import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  producto:any;
  productoDetalle: any;
  mostrarCompleto = false;

  textoHTML =
    "<p></p>";
  arrayTextoLimpio = this.textoHTML
    .replace(/<[^>]*>/g, "")
    .split(" ")
    .splice(0, 350)
    .join(" ");
  constructor(
    private activatedRoute:ActivatedRoute,
    private productosService:ProductosService
  ) { 
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    console.log(id)
    if(id){
      this.getProducto(id)
    }
    
  }
  async getProducto(id:string){
    //Promise
    this.productoDetalle = await this.productosService.getDescItem(id)
    this.producto = await this.productosService.getById(id);
    console.log(this.producto);
  }
  ngOnInit(): void {
  }

}
