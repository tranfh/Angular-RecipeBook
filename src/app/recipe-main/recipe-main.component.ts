import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-model';
import { RecipeServices } from './recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-main',
  templateUrl: './recipe-main.component.html',
  styleUrls: ['./recipe-main.component.css'],
  providers: [RecipeServices]
})
export class RecipeMainComponent implements OnInit {
  selectedRecipe: Recipe;
  recipeSub: Subscription;

  constructor(private recipeServices: RecipeServices) { }

  //  listening for the recipeSelected from recipe-item componenet
  ngOnInit(): void {
    this.recipeServices.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe
      }
    );
  }
}
