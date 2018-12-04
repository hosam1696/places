import { Component } from '@angular/core';
import { NavController, ModalController , ActionSheetController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  viewSelected: string = 'list';

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController ,
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

  goView(){
    let ViewModal = this.modalCtrl.create('ViewPage',{typePage:'list'});
    ViewModal.onDidDismiss(data => {
      if( data.page != '' ){
        this.navCtrl.push(data.page);
      }
      console.log(data);
    });
    ViewModal.present();
  }

}
