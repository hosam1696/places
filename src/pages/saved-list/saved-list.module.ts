import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedListPage } from './saved-list';

@NgModule({
  declarations: [
    SavedListPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedListPage),
  ],
})
export class SavedListPageModule {}
