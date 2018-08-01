import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventStatisticsAdminPage } from './event-statistics-admin.page';

let page: any = EventStatisticsAdminPage;

@NgModule({
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(page),
    ],
    declarations: [page],
    entryComponents: [page],
    exports: [page]
})
export class EventStatisticsAdminPageModule {
}
