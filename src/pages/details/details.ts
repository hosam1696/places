import { Component} from '@angular/core';
import {NavController, ModalController, App, IonicPage,NavParams } from 'ionic-angular';
import {AppstorageProvider} from "../../providers/appstorage/appstorage";
import {GlobalProvider} from "../../providers/global/global";
import { Observable } from 'rxjs/Observable';
import{HttpProvider} from '../../providers/http/http';





@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  propDetails: any;
  userData: any;
 
  data :Observable<any>;
  dataGet:any;
  likeddetails:any
  // id:number;
  constructor(
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController,
    private globalProvider: GlobalProvider,
    private appStorage: AppstorageProvider,
    public navParams: NavParams,
    public http : HttpProvider
   
    ){
      // this.value = navParams.get('params');
      this.propDetails = this.navParams.get('details');
      console.log( this.propDetails);
    }

  // ionViewDidLoad() {
    
  //   this.propDetails = this.navParams.get('details');
  //   console.log( this.propDetails.id);
  // }
  // async ionViewDidLoad() {
  

  //       this.globalProvider.getProprity(this.propDetails.id)

  //     .subscribe(
  //       response => {
  //         console.log({response});
  //         this.propDetails= response;
  //       },
  //         err => {
  //         console.warn({err});
  //         }
   
  //     )
  // }
     
  ionViewDidLoad() {
    this.data = this.http.get("property/"+this.propDetails.id);
    this.data.subscribe(data =>{
      this.dataGet = data;
    })
   }
  
  async postlikedDetails(){
  console.log("hi")
  this.userData = await this.appStorage.getSavedUser();
  console.log(this.userData.api_token)
 this.globalProvider.addtoFavouriteList(this.propDetails.id ,this.userData.api_token);
  this.data.subscribe(data =>{
    this.likeddetails = data;
    console.log(this.likeddetails)
  })

}
  goBack(){
    this.navCtrl.setRoot('BasicTabsPage');
  }

}
