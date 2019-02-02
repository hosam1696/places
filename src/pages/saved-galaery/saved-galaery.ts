import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App } from 'ionic-angular';

/**
 * Generated class for the SavedGalaeryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saved-galaery',
  templateUrl: 'saved-galaery.html',
})
export class SavedGalaeryPage {

 
  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public app: App,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  goDetails(){
    //this.navCtrl.push('DetailsPage');
    this.app.getRootNav().setRoot('DetailsPage');
  }
  goView(){
    let ViewModal = this.modalCtrl.create('ViewSavedPage',{typePage:'gallery'});
    ViewModal.onDidDismiss(data => {
      if( data.page != '' ){
        this.navCtrl.push(data.page);
      }
      console.log(data);
    });
    ViewModal.present();
  }

  
  autoSearchPage(){
    //this.navCtrl.push('AutoSearchPage');

    let autoSearchModal = this.modalCtrl.create('AutoSearchPage');
    autoSearchModal.onDidDismiss(data => {
      console.log(data);
    });
    autoSearchModal.present();
  }

  filter(){
    let filterModal = this.modalCtrl.create('FiltersPage');
    filterModal.onDidDismiss(data => {
      console.log(data);
    });
    filterModal.present();
  }

}
