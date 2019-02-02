import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedGalaeryPage } from './saved-galaery';

@NgModule({
  declarations: [
    SavedGalaeryPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedGalaeryPage),
  ],
})
export class SavedGalaeryPageModule {}
