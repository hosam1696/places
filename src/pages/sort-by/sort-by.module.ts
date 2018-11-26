import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SortByPage } from './sort-by';

@NgModule({
  declarations: [
    SortByPage,
  ],
  imports: [
    IonicPageModule.forChild(SortByPage),
  ],
})
export class SortByPageModule {}
