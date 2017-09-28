import { Routes } from '@angular/router';

import { DishesComponent } from './dishes/dishes.component';
import { RecipeComponent } from './recipe/recipe.component';

export const routes: Routes = [
  { path: 'api/dishes',  component: DishesComponent },
  { path: 'api/dishes/:id',  component: RecipeComponent },
  { path: ' ', redirectTo: 'api/dishes' }
]
