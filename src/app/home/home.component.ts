import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  enteredValue = '';
  newPost = this.enteredValue;

  constructor() { }

  ngOnInit(): void {
  }


  onAddPost() {
    this.newPost = this.enteredValue;
  }

}
