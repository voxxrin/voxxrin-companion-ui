import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { PresentationsPage } from './presentations.page';
import { ServicesModule } from '../../services/services.module';

let page: any = PresentationsPage;

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
export class PresentationsPageModule {
}