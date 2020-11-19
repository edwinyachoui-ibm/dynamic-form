import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(rawNum: string): string {
    const areaCode = rawNum.slice(1, 4);
    const prefix = rawNum.slice(6, 9);
    const lineNumber = rawNum.slice(10, 14);

    return `${areaCode}-${prefix}-${lineNumber}`;
  }

}
