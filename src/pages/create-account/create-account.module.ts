import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAccountPage } from './create-account';
import { UiProvider } from '../../providers/ui';
import { AppstorageProvider } from '../../providers/appstorage/appstorage';

@NgModule({
  declarations: [
    CreateAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAccountPage),
  ],
  providers: [
    UiProvider,
    AppstorageProvider
  ]
})
export class CreateAccountPageModule {}
