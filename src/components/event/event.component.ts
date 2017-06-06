import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event',
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit {

  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

}
