import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: string): string {
    
    let newFecha : string = value.replace("T", "  ");

    return newFecha.replace(".000Z", "");
  }

}
