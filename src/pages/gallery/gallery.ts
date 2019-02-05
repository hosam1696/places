import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App } from 'ionic-angular';
import {AppstorageProvider} from "../../providers/appstorage/appstorage";
import {GlobalProvider} from "../../providers/global/global";


@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  private userData: any;
  private mainData: any;

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public app: App,
    private appStorage: AppstorageProvider,
    private globalProvider: GlobalProvider,
    public navParams: NavParams) {
  }

  async ionViewDidLoad() {
    this.userData = await this.appStorage.getSavedUser();
    this.globalProvider.getMain()
      .subscribe(
        response => {
          console.log({response});
          this.mainData = response;
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

  goView(){
    let ViewModal = this.modalCtrl.create('ViewPage',{typePage:'gallery'});
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

  doRefresh(event) {
    this.ionViewDidLoad();
    setTimeout(()=>{
      event.complete();
    }, 1000)
  }
}
