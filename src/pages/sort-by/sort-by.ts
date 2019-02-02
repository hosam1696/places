import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  typeSort: string = '';
  constructor(
    public viewCtrl:ViewController,
    public navCtrl: NavController, public navParams: NavParams) {

    this.typeSort = this.navParams.get('typeSort');
    console.log('typeSort = '+this.typeSort);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

  close(type) {

    this.viewCtrl.dismiss({type:type});
  }
}
