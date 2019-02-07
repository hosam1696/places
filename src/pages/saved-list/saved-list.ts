import { Component } from '@angular/core';
import {  ActionSheetController} from 'ionic-angular';
import {NavController, ModalController, App, IonicPage} from 'ionic-angular';
import {AppstorageProvider} from "../../providers/appstorage/appstorage";
import {GlobalProvider} from "../../providers/global/global";


@Component({
  selector: 'page-saved-list',
  templateUrl: 'saved-list.html',
})
export class SavedListPage {
  sortBySelected: string = 'featured';
  userData: any;
  favoriteData:any;

  viewSelected: string = 'list';

  
  constructor(
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController,
    private globalProvider: GlobalProvider,
    public actionSheetCtrl: ActionSheetController ,

    private appStorage: AppstorageProvider
    ) {

  }
  async ionViewDidLoad() {
    this.userData = await this.appStorage.getSavedUser();
    this.globalProvider.getFavouriteList()
      .subscribe(
        response => {
          console.log({response});
          this.favoriteData = response;
        },
          err => {
          console.warn({err});
          }
      )
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
