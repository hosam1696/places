import { CreateAccountPage } from './../create-account/create-account';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController } from 'ionic-angular';

/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {

  loginPage: any = 'LoginPage';
  createAccountPage: any = 'CreateAccountPage';

  notifications: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public app: App , public modalCtrl :ModalController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
  }

  toggleNoti(){
    var noti ;
    if( this.notifications == false ){
      noti = 0;
    }else{
      noti = 1;
    }
    //localStorage.setItem("allow_notifications", noti); 
  }

  // goPage(page){
  //   this.navCtrl.push(page);
  //   this.app.getRootNav().setRoot(page);

  // }

  goPage(page) {
    let sortModal = this.modalCtrl.create(page);
    sortModal.onDidDismiss(data => {
      if( data.type != '' ){
        //this.sortBySelected =  data.type;
      }
      console.log(data);
    });
    sortModal.present();
  }
}
