import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-view-saved',
  templateUrl: 'view-saved.html',
})
export class ViewSavedPage {

  savedMapPage: any = 'SavedMapPage';
  savedListPage: any = 'SavedListPage';
  savedGalaeryPage: any = 'SavedGalaeryPage';
  
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
