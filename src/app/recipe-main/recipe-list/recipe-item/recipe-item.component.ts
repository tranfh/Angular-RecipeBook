import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe-model';
import { RecipeServices } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // // @Output() recipeSelected = new EventEmitter<void>();
  
  //  listening/stored recipe received from recipe-list-component
  @Input() recipe: Recipe;
  // listening to the index from outside 
  @Input() index: number;

  // constructor(private recipeServices: RecipeServices) { } removed cause routing added

  ngOnInit(): void {
  }

  // when the recipe item is selected (<a> in recipe-item.html) share the information out 
  // child component must emit to parent 
  // onSelected() {
  //   this.recipeServices.recipeSelected.emit(this.recipe);
    // this.recipeSelected.emit();
    // removed once routing added
  // }

}
