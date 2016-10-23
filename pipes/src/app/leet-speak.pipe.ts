import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leet'
})
export class LeetSpeakPipe implements PipeTransform {

  // Create the Letter translations arrays
  private readonly LettersEnglish = [
    'n', 'b', 'k', 'd', 'e', 'f', 'g', 'h',
    'p', 'm', 'r', 'l', 'o', 'q', 's', 't',
    'u', 'x', 'w', 'y', 'z', 'c', 'a', 'j',
    'i', 'v', ' '];

  private readonly LettersLeet = [
    '/\\/', '|}', '|X', '[)', '3', '|=', 'gee', '|-|',
    '|*', '(\\/)', '|2', '1', '()', '0', '$', '+',
    '|_|', '><', '\\X/', '\'/', '2', '<', '/\\', '_|',
    '|', '\\/', '  '];

  transform(value: string): string {
    for (let i = 0; i < this.LettersEnglish.length; ++i)
      value = value.replace(
        new RegExp(this.LettersEnglish[i], "gi"),
        this.LettersLeet[i]
      );
    return value;
  }

}
