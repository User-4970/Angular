import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component(
  {
  selector: 'app-recipe-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-info.component.html',
  styleUrl: './recipe-info.component.css',
})

export class RecipeInfoComponent
{
  recipeName = 'Сирники зі сметаною';

  photo =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KtZxp98lG656ej9GcWHpvuGcJgYK7Lx2qKhj_0FV5w&s=10';

  ingredients = [
    { name: 'Кисломолочний сир', amount: '400 г' },
    { name: 'Яйце', amount: '1 шт.' },
    { name: 'Цукор', amount: '2 ст. ложки' },
    { name: 'Борошно', amount: '4 ст. ложки' },
    { name: 'Сіль', amount: 'щіпка' },
    { name: 'Олія для смаження', amount: '2 ст. ложки' },
  ];

  steps = [
    'Розім’яти сир виделкою до однорідної маси.',
    'Додати яйце, цукор і сіль, перемішати.',
    'Всипати борошно та замісити м’яке тісто.',
    'Сформувати невеликі коржики, обваляти в борошні.',
    'Обсмажити з обох боків на розігрітій олії до золотистої скоринки.',
    'Подавати теплими зі сметаною або варенням.',
  ];
}
