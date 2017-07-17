import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'abstract-event',
    templateUrl: 'abstract-event.component.html'
})
export class AbstractEventComponent {

    @Input() event: Event;

    constructor() {
    }
}
