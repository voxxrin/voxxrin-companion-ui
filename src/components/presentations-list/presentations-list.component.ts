import { Presentation } from '../../models/presentation.model';
import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
    selector: 'presentations-list',
    templateUrl: 'presentations-list.component.html'
})
export class PresentationsListComponent {

    @ContentChild('presentationHeader') templateHeader: TemplateRef<Presentation>;
    @ContentChild('presentationBody') templateBody: TemplateRef<Presentation>;

    @Input() presentations: Presentation[];
    @Output() presentationSelected: EventEmitter<Presentation> = new EventEmitter<Presentation>();

    public getPresentationSlotKey(presentation: Presentation, index: number, list: Presentation[]) {
        if (index == 0) {
            return presentation;
        } else if (list[index - 1].from.isSame(list[index].from, 'minute')
            && list[index - 1].to.isSame(list[index].to, 'minute')) {
            return null;
        } else {
            return presentation;
        }
    }
}