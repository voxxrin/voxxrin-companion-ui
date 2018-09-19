import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { EventsPage } from './events.page';

let page: any = EventsPage;

@NgModule({
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(page)
    ],
    declarations: [page],
    entryComponents: [page],
    exports: [page]
})
export class EventsPageModule {
}