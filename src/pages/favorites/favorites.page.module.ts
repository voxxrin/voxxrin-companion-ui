import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesPage } from './favorites.page';
import { ComponentsModule } from '../../components/components.module';
import { ServicesModule } from '../../services/services.module';

@NgModule({
  declarations: [
    FavoritesPage,
  ],
  imports: [
    ComponentsModule,
    ServicesModule,
    IonicPageModule.forChild(FavoritesPage),
  ],
})
export class FavoritesPageModule {}
