
import { Component } from '@angular/core';
import {  ActionSheetController} from 'ionic-angular';
import {NavController, ModalController, App, IonicPage} from 'ionic-angular';
import {AppstorageProvider} from "../../providers/appstorage/appstorage";
import {GlobalProvider} from "../../providers/global/global";

/**
 * Generated class for the SavedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saved',
  templateUrl: 'saved.html',
})
export class SavedPage {
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


  mapModal(pageType){
    this.navCtrl.push('MapPage',{pageType:pageType});
  }

  goDetails(){
    this.navCtrl.push('DetailsPage');
  }


}
