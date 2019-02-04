import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
