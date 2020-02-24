import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  enteredTitle = '';
  enteredContent = '';
  @Output() announcementCreated = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onAddAnnouncement() {
    const announcement = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.announcementCreated.emit(announcement);
  }

}
