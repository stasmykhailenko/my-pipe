import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySortArray'
})
export class MySortArrayPipe implements PipeTransform {

  transform(value: number[], args?: string): number[] {
    if(args == "desk") {
      return value.sort((a, b) => b-a);
    } else if(args == "ask") {
      return value.sort((a, b) => a-b);
    }
  }

}
