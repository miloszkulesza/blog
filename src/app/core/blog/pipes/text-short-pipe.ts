import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textShort',
  standalone: false
})
export class TextShortPipe implements PipeTransform {

  transform(value: string): unknown {
    if(!value) {
      return '';
    } else if (value.length < 5) {
      return value;
    }
    else {
      return value.substring(0, 5).concat('...');
    }
  }

}
