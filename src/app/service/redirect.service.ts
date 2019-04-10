import {Injectable} from '@angular/core';
import {ProductRedirect} from "../../core/class/product-redirect";
import {ProductEnum} from "../../core/Enum/product-enum.enum";

@Injectable()
export class RedirectService {

  products: Array<ProductRedirect> = new Array<ProductRedirect>();

  product: ProductEnum;

  constructor() { }

  public getProductRedirect() : Array<ProductRedirect> {
    return this.products;
  }

  public getEnum() : ProductEnum{
    return ProductEnum.REACT;
  }
}
