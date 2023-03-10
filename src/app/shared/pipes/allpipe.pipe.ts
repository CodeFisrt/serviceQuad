import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allpipe'
})
export class AllpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value == '' && value == null && value == undefined) {
      return value = 'N/A';
    } else {
      return value;
    }
  };
}
