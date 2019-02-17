import { Component } from '@angular/core';
import {NavController, ModalController, App, IonicPage} from 'ionic-angular';
import {AppstorageProvider} from "../../providers/appstorage/appstorage";
import {GlobalProvider} from "../../providers/global/global";
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  viewSelected: string = 'list';
  sortBySelected: string = 'featured';
  userData: any;
  mainData:any=[];
  constructor(
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController,
    private globalProvider: GlobalProvider,
    private appStorage: AppstorageProvider,
    public Storage:Storage
    ) {
this.mainData=[];
  }

  async ionViewDidLoad() {
    this.userData = await this.appStorage.getSavedUser();
    this.globalProvider.getMain()
      .subscribe(
        response => {
        //  console.log(response.propertytypes);
          this.mainData = response;
          this.Storage.set('prototypes',this.mainData)
          console.log( 'http://tamleek-eg.com/tamlek/api/'+this.mainData.recommend[0].images[0].path)
        },
          err => {
          console.warn({err});
          }
      )
  }

  goDetails(params){
    //this.navCtrl.setRoot('DetailsPage');
    this.app.getRootNav().setRoot('DetailsPage', params);
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

  sortByModal() {
    let sortModal = this.modalCtrl.create('SortByPage',{typeSort: this.sortBySelected});
    sortModal.onDidDismiss(data => {
      if( data.type != '' ){
        this.sortBySelected =  data.type;
      }
      console.log(data);
    });
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

  doRefresh(event) {
    this.ionViewDidLoad();
    setTimeout(()=>{
      event.complete();
    }, 1000)
  }
}
