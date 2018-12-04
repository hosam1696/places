import { GalleryPage } from './../gallery/gallery';
import { BasicTabsPage } from './../basic-tabs/basic-tabs';
import { MapPage } from './../map/map';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  mapPage: any = 'MapPage';
  basicTabsPage: any = 'BasicTabsPage';
  galleryPage: any = 'GalleryPage';
  
  typePage: string = '';
  constructor(
    public viewCtrl:ViewController,
    public navCtrl: NavController, public navParams: NavParams) {

    this.typePage = this.navParams.get('typePage');
    console.log('typePage = '+this.typePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

  close(page) {

    this.viewCtrl.dismiss({page:page});
  }


}
