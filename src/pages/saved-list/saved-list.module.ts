import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedListPage } from './saved-list';
import { UiProvider } from '../../providers/ui';

@NgModule({
  declarations: [
    SavedListPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedListPage),
  ],
  providers: [
    UiProvider
  ]
})
export class SavedListPageModule {}
