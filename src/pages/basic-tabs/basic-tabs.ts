import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BasicTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basic-tabs',
  templateUrl: 'basic-tabs.html',
})
export class BasicTabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'SavedListPage';
  tab3Root = 'MyAccountPage';
  tab4Root = 'AgentLoginPage';

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasicTabsPage');
  }

}
