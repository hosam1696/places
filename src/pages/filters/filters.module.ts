import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltersPage } from './filters';
import { GlobalProvider } from '../../providers/global/global';

@NgModule({
  declarations: [
    FiltersPage,
  ],
  imports: [
    IonicPageModule.forChild(FiltersPage),
  ],
  providers: [
    GlobalProvider
  ]
})
export class FiltersPageModule {}
