import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { EventAdminPage } from './event-admin.page';

let page: any = EventAdminPage;

@NgModule({
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(page)
    ],
    declarations: [page],
    entryComponents: [page],
    exports: [page]
})
export class EventAdminPageModule {
}