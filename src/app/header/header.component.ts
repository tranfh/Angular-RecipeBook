import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// Enable if below is used 
  // @Output() selectedPage = new EventEmitter<string>();

  page: string;
  collapsed = true;


  constructor() { }

  ngOnInit(): void {
  }

  // To enable the onclick navigation
  // When the button is clicked pass data on which one was clicked 
  // onSelect(selected: string) {
  //   this.page = selected;
  //   console.log(this.page);
  //   this.selectedPage.emit(this.page);
  // }

}
