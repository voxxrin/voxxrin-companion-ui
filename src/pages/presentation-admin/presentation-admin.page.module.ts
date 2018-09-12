import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { ServicesModule } from '../../services/services.module';
import { PresentationAdminPage } from './presentation-admin.page';

let page: any = PresentationAdminPage;

@NgModule({
    imports: [
        ComponentsModule,
        ServicesModule,
        IonicPageModule.forChild(page)
    ],
    declarations: [page],
    entryComponents: [page],
    exports: [page]
})
export class PresentationAdminPageModule {
}