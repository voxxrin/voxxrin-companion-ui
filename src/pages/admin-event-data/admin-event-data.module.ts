import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminEventDataPage } from './admin-event-data';

let page: any = AdminEventDataPage;

@NgModule({
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(page),
  ],
  declarations: [page],
  entryComponents: [page],
  exports: [page]
})
export class AdminEventDataPageModule { }
