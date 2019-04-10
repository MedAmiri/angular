import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, exp: number, multi?: number): number {
    return (multi != null)? Math.pow(value, exp)*2: Math.pow(value, exp);
  }

}
