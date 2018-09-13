import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { DefaultImageDirective } from './default-image.directive';

let directives: any[] = [
    DefaultImageDirective
];

@NgModule({
    imports: [IonicModule],
    declarations: directives,
    exports: [directives]
})
export class DirectivesModule {

}