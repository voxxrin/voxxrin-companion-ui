import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresentationPage } from './presentation.page';
import { ComponentsModule } from '../../components/components.module';
import { HomePage } from './home.page';

let page: any = HomePage;

@NgModule({
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(page)
    ],
    declarations: [page],
    entryComponents: [page],
    exports: [page]
})
export class HomePageModule {
}