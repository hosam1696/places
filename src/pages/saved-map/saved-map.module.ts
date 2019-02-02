import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedMapPage } from './saved-map';

@NgModule({
  declarations: [
    SavedMapPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedMapPage),
  ],
})
export class SavedMapPageModule {}
