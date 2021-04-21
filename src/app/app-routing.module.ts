import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipe-main/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-main/recipe-edit/recipe-edit.component';
import { RecipeMainComponent } from './recipe-main/recipe-main.component';
import { RecipeStartComponent } from './recipe-main/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

// define routes to direct to
const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // the first website our app will load, if the full path is empty
  {
    path: 'recipes', component: RecipeMainComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent }, // :id is dynamically loaded due to ":" it'll be used to load the corresonding recipe
      { path: ':id/edit', component: RecipeEditComponent }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // added to Angular Module
  exports: [RouterModule]
})

export class AppRoutingModule { }
