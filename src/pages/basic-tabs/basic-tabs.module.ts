import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicTabsPage } from './basic-tabs';

@NgModule({
  declarations: [
    BasicTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicTabsPage),
  ],
})
export class BasicTabsPageModule {}
