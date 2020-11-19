import {Pipe, PipeTransform} from '@angular/core';
import {DateTime} from 'luxon';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  // dirty way
  transform(value: string): number {
    return Math.abs(parseInt(DateTime.fromFormat(value, 'yyyy/MM/dd')
      .diffNow('years').years, 10));
  }
}
