import { Component, Input } from '@angular/core';

@Component({
    selector: 'top-navbar',
    templateUrl: './top-navbar.component.html'
})
export class TopNavbarComponent {
   @Input() title: string;// = "Blabla";
}
