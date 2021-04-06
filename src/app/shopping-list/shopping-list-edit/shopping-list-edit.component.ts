import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
@ViewChild('itemName', {static: false}) itemNameRef: ElementRef 
@ViewChild('itemAmount', {static: false}) itemAmountRef: ElementRef 
@Output() ingredientAdded = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteItem() {}

  onAddItem() {
    const name = this.itemNameRef.nativeElement.value;
    const amount = this.itemAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.ingredientAdded.emit(newIngredient);
  }

  onClearItem() {}

}
