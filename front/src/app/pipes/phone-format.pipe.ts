import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
  standalone: false
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: string | number): string {
    if (!value) return '';

    let phoneStr = value.toString().replace(/\D/g, '');

    if (phoneStr.length === 9) {
      return phoneStr.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    } else if (phoneStr.length === 10) {
      return phoneStr.replace(/(\d{2})(\d{4})(\d{4})/, '$1 $2 $3');
    } else if (phoneStr.length === 11) {
      return phoneStr.replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3');
    } else if (phoneStr.length === 12) {
      return phoneStr.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '+$1 $2 $3 $4');
    } else {
      return phoneStr;
    }
  }
}
