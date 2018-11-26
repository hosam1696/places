import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    ) {

  }

  goDetails(){
    this.navCtrl.push('DetailsPage');
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

  sortByModal(img) {
    let sortModal = this.modalCtrl.create('SortByPage');
    sortModal.present();
  }

  mapModal(){
    this.navCtrl.push('MapPage',{pageType:''});
  }
}
