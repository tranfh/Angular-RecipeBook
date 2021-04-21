import { Ingredient } from "../shared/ingredient.model";

import { Subject } from 'rxjs';

export class ShoppingServices {

    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Oranges', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    onAddIngredient(item: Ingredient) {
        this.ingredients.push(item);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    onAddIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //   this.onAddIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice())
    }
}