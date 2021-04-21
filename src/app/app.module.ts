import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeMainComponent } from './recipe-main/recipe-main.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-main/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-main/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-main/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { ShoppingServices } from './shopping-list/shopping.service';
import { RecipeStartComponent } from './recipe-main/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-main/recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeMainComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    DropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShoppingServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
