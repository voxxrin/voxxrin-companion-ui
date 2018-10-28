import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { EventPage } from './event.page';

let page: any = EventPage;

@NgModule({
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(page)
    ],
    declarations: [page],
    entryComponents: [page],
    exports: [page]
})
export class EventPageModule {
}