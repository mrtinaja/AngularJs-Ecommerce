export interface Producto{
  id: string;
site_id: string;
title: string;
seller_id: number;
automatic_relist: boolean;
category_id: string;
official_store_id: number;
price: number;
base_price: number;
thumbnail: string;
description: string;
/*categoria:[{
  [k:string]:string
}],*/

}
export interface ResponseProductos{
site_id: string;

results: Producto[],
description: {[k:string]:string|number}
}