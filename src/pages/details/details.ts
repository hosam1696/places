import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  propDetails: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.propDetails = this.navParams.get('details');
    console.log('Details', this.propDetails);
  }

  goBack(){
    this.navCtrl.setRoot('BasicTabsPage');
  }

}
