import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { ClientProvider } from '../../providers/client/client';
import { AppstorageProvider } from '../../providers/appstorage/appstorage';
import { UiProvider } from '../../providers/ui';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  providers: [
    ClientProvider,
    AppstorageProvider,
    UiProvider
  ]
})
export class LoginPageModule {}
