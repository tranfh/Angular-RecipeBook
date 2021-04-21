import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe-model';
import { RecipeServices } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeServices: RecipeServices,
    private router: Router,
    private route: ActivatedRoute) { }

  // get array of recipes 
  ngOnInit(): void {
    this.recipes = this.recipeServices.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe() {
    // relativeTo is part of activatedRoute which will tell angular which relative path we're referencing
    this.router.navigate(['new'], { relativeTo: this.route })
  }

}
