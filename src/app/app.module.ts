import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';
import { GlobalProvider } from '../providers/global/global';
import { ClientProvider } from '../providers/client/client';
import { AppstorageProvider } from '../providers/appstorage/appstorage';
import { ToastProvider } from '../providers/toast/toast';
import { LoadingProvider } from '../providers/loading/loading';
import { HttpProvider } from '../providers/http/http';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation,
    InAppBrowser,
    ApiProvider,
    GlobalProvider,
    ClientProvider,
    AppstorageProvider,
    ToastProvider,
    LoadingProvider,
    HttpProvider,
  ]
})
export class AppModule { }
