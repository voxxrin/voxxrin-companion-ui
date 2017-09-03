import { DateTime } from 'ionic-angular/es2015';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Day } from "../../models/day.model";

@Component({
    selector: 'days-list',
    templateUrl: './days-list.component.html'
})
export class DaysListComponent implements OnInit {

    @Input() days: Day[];
    @Output() daySelected: EventEmitter<Day> = new EventEmitter<Day>();

    constructor() {
    }

    ngOnInit() {
    }

    onSelectedDay(day: Day): void {
        this.daySelected.emit(day);
    }
}
