import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeBook';
  currentPage: string = 'recipe';

  onSelectedPage(page: string) {
    this.currentPage = page;
  }
}
