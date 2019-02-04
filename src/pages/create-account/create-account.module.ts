import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAccountPage } from './create-account';
import { UiProvider } from '../../providers/ui';

@NgModule({
  declarations: [
    CreateAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAccountPage),
  ],
  providers: [
    UiProvider
  ]
})
export class CreateAccountPageModule {}
