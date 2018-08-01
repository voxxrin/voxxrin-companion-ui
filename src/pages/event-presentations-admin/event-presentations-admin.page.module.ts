import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventPresentationsAdminPage } from './event-presentations-admin.page';

let page: any = EventPresentationsAdminPage;

@NgModule({
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(page),
    ],
    declarations: [page],
    entryComponents: [page],
    exports: [page]
})
export class EventPresentationsAdminPageModule {
}
