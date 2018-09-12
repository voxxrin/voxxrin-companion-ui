import { Component, Input } from '@angular/core';
import { Presentation } from '../../../models/presentation.model';

@Component({
    selector: 'presentation-attached-content-list',
    templateUrl: 'presentation-attached-content-list.component.html'
})
export class PresentationAttachedContentListComponent {

    @Input() presentation: Presentation;

}