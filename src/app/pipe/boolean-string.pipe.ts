import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'booleanToString'
})
export class BooleanStringPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Sí' : 'No';
  }
}
