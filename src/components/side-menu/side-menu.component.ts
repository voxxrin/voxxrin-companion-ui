import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'side-menu',
    templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {

    @Input() content: any;
}