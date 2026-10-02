import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { ExercisesComponent } from './exercises/exercises.component';


@Component({
  //imports: [RouterOutlet],
  selector: 'app-root',
  imports: [ExercisesComponent, RecipeInfoComponent],
  //styleUrl: './app.css',
  styleUrl: './app.component.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('FirstAngularProject');
}
