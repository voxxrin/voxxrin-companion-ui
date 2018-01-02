import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresentationPage } from './presentation.page';
import { ComponentsModule } from '../../components/components.module';
import { PresentationsPage } from './presentations.page';
import { TwitterFeedPage } from './twitter-feed.page';

let page: any = TwitterFeedPage;

@NgModule({
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(page)
    ],
    declarations: [page],
    entryComponents: [page],
    exports: [page]
})
export class TwitterFeedPageModule {
}