import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventDataAdminPage } from './event-data-admin.page';

let page: any = EventDataAdminPage;

@NgModule({
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(page),
  ],
  declarations: [page],
  entryComponents: [page],
  exports: [page]
})
export class EventDataAdminPageModule { }
