import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishesService } from '../services/dishes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Dishes: DishesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.getRecipeDetails(params['id']);
    })
  }
  getRecipeDetails(id) {
  this.Dishes.get(id)
  .subscribe(recipes => this.recipe = recipes)
  }

}
