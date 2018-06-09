import { Component, Input } from '@angular/core';
import { Presentation } from "../../models/presentation.model";

@Component({
    selector: 'presentations-list-item',
    templateUrl: 'presentations-list-item.html'
})
export class PresentationsListItemComponent {

    @Input() presentation: Presentation;
    
    constructor() {}

}
