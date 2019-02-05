import {Component} from '@angular/core';
import {Events, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppstorageProvider} from "../providers/appstorage/appstorage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  constructor(platform: Platform,
              private appStorage: AppstorageProvider,
              statusBar: StatusBar,
              private events: Events,
              splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.setHomePage();
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.events.subscribe('set:root', page => this.rootPage = page)
  }

  setHomePage() {
    this.appStorage.getSavedUser()
      .then(data => this.rootPage = (data && data.id) ? 'BasicTabsPage' : 'LoginPage')
      .catch(err => this.rootPage = 'LoginPage')
  }
}

