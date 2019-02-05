import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryPage } from './gallery';
import {GlobalProvider} from "../../providers/global/global";
import {AppstorageProvider} from "../../providers/appstorage/appstorage";

@NgModule({
  declarations: [
    GalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleryPage),
  ],
  providers: [
    GlobalProvider,
    AppstorageProvider
  ]
})
export class GalleryPageModule {}
