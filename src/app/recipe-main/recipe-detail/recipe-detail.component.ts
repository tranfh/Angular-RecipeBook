import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe-model';
import { RecipeServices } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // receivintg recipe info from recipe main
  // display once info recieved
  // @Input() recipe: Recipe; not needed after routing
  recipe: Recipe;
  id: number;

  constructor(private recipeServices: RecipeServices, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // works only when first loading the component 
    // const id = this.route.snapshot.params['id'];

    // instead gonna subscribe to the route to listen for any data 
    // used the method from the service to redirect the page to pass recipe data dynamically when clicked
    this.route.params.subscribe(
      (params: Params) => {
        // + casts it to a number 
        this.id = +params['id'];
        this.recipe = this.recipeServices.getRecipe(this.id)
      }
    )
  }

  // nested service that will add all recipe ingredients to shopping list
  onAddToShoppingList() {
    this.recipeServices.onAddToShoppingList(this.recipe.ingredients);
  }

  // when button is clicked itll add the edit string to the end of the current route 
  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }
}
