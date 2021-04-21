import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
editMode: Boolean = false;

  // ActivatedRoute pass data from one component to another via routing 
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // the edit will listen for an ID 
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        // if recipe edits itll return and ID so in editmode if null new recipe mode
        this.editMode = params['id'] != null;
      }
    )
  }

}
