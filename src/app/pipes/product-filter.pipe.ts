import { Observable } from 'rxjs/Observable';
import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs/add/operator/map';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(products$: Observable<any[]>, name: string): any {
    return products$.map(products =>
      products.filter(product =>
        product.payload
          .val()
          .title.toLowerCase()
          .includes(name.toLowerCase())
      )
    );
  }
}
