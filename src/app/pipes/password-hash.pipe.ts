import { Pipe, PipeTransform } from '@angular/core';

const englishLowercase = 'abcdefghijklmnopqrstuvwxyz';
const englishUppercase = englishLowercase.toUpperCase();
const ukrainianLowercase = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя';
const ukrainianUppercase = ukrainianLowercase.toUpperCase();

@Pipe({
  name: 'passwordHash',
  standalone: true,
})

export class PasswordHashPipe implements PipeTransform 
{
  transform(password: string | null | undefined): string 
  {
    if (!password) 
    {
      return '';
    }

    return Array.from(password, (character) => 
      {
      const alphabet = [
        englishLowercase,
        englishUppercase,
        ukrainianLowercase,
        ukrainianUppercase,
      ].find((letters) => letters.includes(character));

      if (!alphabet) 
      {
        return character;
      }

      const index = alphabet.indexOf(character);
      return alphabet[(index + 3) % alphabet.length];
    }).join('');
  }
}