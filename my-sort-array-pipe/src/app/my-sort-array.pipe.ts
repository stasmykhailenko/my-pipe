import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySortArray'
})
export class MySortArrayPipe implements PipeTransform {

  transform(value: number[], args?: string): number[] {
    if(args == "desc") {
      return value.sort((a, b) => b-a);
    } else if(args == "asc") {
      return value.sort((a, b) => a-b);
    }
  }

}
