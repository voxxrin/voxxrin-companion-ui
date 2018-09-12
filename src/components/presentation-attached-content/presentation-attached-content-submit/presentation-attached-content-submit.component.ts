import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Presentation } from '../../../models/presentation.model';
import { AttachedContent } from '../../../models/attached-content.model';

@Component({
    selector: 'presentation-attached-content-submit',
    templateUrl: 'presentation-attached-content-submit.component.html'
})
export class PresentationAttachedContentSubmitComponent implements OnInit {

    @Input() presentation: Presentation;

    @Output() attachedContentSubmitted: EventEmitter<AttachedContent> = new EventEmitter<AttachedContent>();
    @Output() dismissed: EventEmitter<any> = new EventEmitter<any>();

    public attachedContent: AttachedContent;

    ngOnInit(): void {
        this.attachedContent = {};
    }

    public isValid() {
        return this.attachedContent.url && this.attachedContent.description && this.attachedContent.mimeType;
    }

    public submit(): void {
        this.attachedContentSubmitted.emit(this.attachedContent);
    }

    public dismiss(): void {
        this.dismissed.emit();
    }
}