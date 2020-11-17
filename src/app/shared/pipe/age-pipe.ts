import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string): number {
    const today = moment();
    const birthdate = moment(value);
    return today.diff(birthdate, 'years');
  }


}
