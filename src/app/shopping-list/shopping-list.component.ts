import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingServices } from './shopping.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private shoppingServices: ShoppingServices) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingServices.getIngredients();
    this.igChangeSub = this.shoppingServices.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      });
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  // onAddIngredient(item: Ingredient) {
  //   // this.ingredients.push(item);
  //   this.shoppingServices.onAddIngredient(item)
  // }
}
