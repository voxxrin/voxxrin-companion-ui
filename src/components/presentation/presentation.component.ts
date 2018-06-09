import { Component, Input } from '@angular/core';
import { Presentation } from '../../models/presentation.model';
import { ConstantsService } from '../../services/constants.service';

@Component({
    selector: 'presentation',
    templateUrl: './presentation.component.html'
})
export class PresentationComponent {

    @Input() presentation: Presentation;

    constructor(public constants: ConstantsService) { }

}
