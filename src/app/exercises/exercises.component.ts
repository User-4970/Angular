import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordHashPipe } from '../pipes/password-hash.pipe';
import { TemperaturePipe, TemperatureUnit } from '../pipes/temperature.pipe';

type ProductCategory = 'Електроніка' | 'Одяг' | 'Аксесуари' | 'Усі';
type CalculatorOperation = '+' | '-' | '×' | '÷';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [CommonModule, FormsModule, PasswordHashPipe, TemperaturePipe],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css',
})

export class ExercisesComponent 
{
  readonly categories: ProductCategory[] = ['Усі', 'Електроніка', 'Одяг', 'Аксесуари'];
  selectedCategory: ProductCategory = 'Усі';

  readonly products = [
    { id: 1, name: 'Бездротові навушники', category: 'Електроніка' as const, price: 2499 },
    { id: 2, name: 'Смартгодинник', category: 'Електроніка' as const, price: 3899 },
    { id: 3, name: 'Бавовняна футболка', category: 'Одяг' as const, price: 799 },
    { id: 4, name: 'Легка куртка', category: 'Одяг' as const, price: 2199 },
    { id: 5, name: 'Шкіряний гаманець', category: 'Аксесуари' as const, price: 1199 },
    { id: 6, name: 'Міський рюкзак', category: 'Аксесуари' as const, price: 1799 },
  ];

  password = 'Привіт123';
  temperature = 25;
  fromUnit: TemperatureUnit = 'C';
  toUnit: TemperatureUnit = 'F';

  firstNumber: number | null = 12;
  secondNumber: number | null = 3;
  operation: CalculatorOperation = '+';

  get result(): number | string | null {
    if (this.firstNumber == null || this.secondNumber == null) {
      return null;
    }

    switch (this.operation) {
      case '+':
        return this.firstNumber + this.secondNumber;
      case '-':
        return this.firstNumber - this.secondNumber;
      case '×':
        return this.firstNumber * this.secondNumber;
      case '÷':
        return this.secondNumber === 0
          ? 'Division by zero'
          : this.firstNumber / this.secondNumber;
    }

    return null;
  }
}