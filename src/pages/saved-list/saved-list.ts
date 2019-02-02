import { Component } from '@angular/core';
import { NavController, ModalController, ActionSheetController, App } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-saved-list',
  templateUrl: 'saved-list.html',
})
export class SavedListPage {


  viewSelected: string = 'list';

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController ,
    public app: App,
    public modalCtrl: ModalController,
    ) {

  }

  goDetails(){
    //this.navCtrl.push('DetailsPage');
    this.app.getRootNav().setRoot('DetailsPage');
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
    let ViewModal = this.modalCtrl.create('ViewSavedPage',{typePage:'list'});
    ViewModal.onDidDismiss(data => {
      if( data.page != '' ){
        this.navCtrl.push(data.page);
      }
      console.log(data);
    });
    ViewModal.present();
  }

}
