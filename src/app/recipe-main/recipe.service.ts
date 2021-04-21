import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingServices } from '../shopping-list/shopping.service';
import { Recipe } from "./recipe-model";

@Injectable()
export class RecipeServices {

  // sending out the recipe info
  recipeSelected = new Subject<Recipe>();

  constructor(private shoppingServices: ShoppingServices) { }

  private recipes: Recipe[] = [
    new Recipe(
      'Pho',
      "Du Ma Best Pho-Eva",
      "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/09/pho-6443w.jpg",
      [new Ingredient('Rice Noodles', 1), new Ingredient("Beef Bone Broth", 5)]),
    new Recipe(
      'Jerk Chicken',
      "Finga Lickiin' Flavah of the Carribean",
      "https://hips.hearstapps.com/del.h-cdn.co/assets/17/28/1499895297-jerk-chicken-delish.jpg?crop=1.00xw:0.750xh;0,0.252xh&resize=640:*",
      [new Ingredient('Chicken', 15), new Ingredient("Jerk Marinade", 5)])
  ];

  // get a copy of our recipe array using slice 
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  // onRecipeSelected(recipe: Recipe) {
  //   console.log(recipe)
  //   // this.recipeWasSelected.emit(recipe);
  // }

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.shoppingServices.onAddIngredients(ingredients);
  }

}