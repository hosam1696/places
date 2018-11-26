import { CreateAccountPage } from './../create-account/create-account';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  goPage(page){
    this.navCtrl.push(page);
  }

}
