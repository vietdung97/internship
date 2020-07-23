import { Pipe, PipeTransform  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'boldKeyword'
})
export class BoldKeywordPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  transform(value: string, regex): any {
    const valueLowercase = value.toLowerCase();
    const regexLowercase = regex.toLowerCase();
    if (!regexLowercase.length) {
      return valueLowercase;
    }
    return valueLowercase.replace(regexLowercase, `<b style="font-size:40px">${regexLowercase}</b>`);
  }
}
