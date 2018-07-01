import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminPresentationsPage } from './admin-presentations';

@NgModule({
  declarations: [
    AdminPresentationsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AdminPresentationsPage),
  ],
})
export class AdminPresentationsPageModule {}
