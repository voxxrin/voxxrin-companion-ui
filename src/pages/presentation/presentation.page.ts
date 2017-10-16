import { Presentation } from '../../models/presentation.model';
import { Component } from '@angular/core';

@Component({
    templateUrl: './presentation.page.html'
})
export class PresentationPage {

    public presentations: Presentation[];

}