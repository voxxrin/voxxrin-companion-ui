import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresentationPage } from './presentation.page';
import { ComponentsModule } from '../../components/components.module';
import { ServicesModule } from '../../services/services.module';

let page: any = PresentationPage;

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
export class PresentationPageModule {
}