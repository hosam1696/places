import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SortByPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sort-by',
  templateUrl: 'sort-by.html',
})
export class SortByPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SortByPage');
  }

  close() {
    this.navCtrl.pop();
  }

  go()
  {
    console.log('xxxxxxxxxx');
  }
}
