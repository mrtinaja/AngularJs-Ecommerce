import { Pipe, PipeTransform } from "@angular/core";
import { Producto } from "src/app/interfaces/Productos";


@Pipe({
    name: 'productoFilter',
})
export class ProductofilterPipe implements PipeTransform {
    transform(productos: Producto[], searchTerm: string) : Producto[]{
if (!productos || !searchTerm) {
    return productos;
}

return productos.filter(producto => 
    producto.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
