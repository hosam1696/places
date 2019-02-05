import {CreateAccountPage} from './../create-account/create-account';
import {LoginPage} from './../login/login';
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, App, ModalController, Events} from 'ionic-angular';
import {AppstorageProvider} from '../../providers/appstorage/appstorage';

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
  userData: any;
  notifications: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App,
              public modalCtrl: ModalController,
              private events: Events,
              private appStorage: AppstorageProvider
  ) {
  }

  ionViewWillEnter() {
    this.appStorage.getSavedUser()
      .then(userData => this.userData = userData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
  }

  toggleNoti() {
    var noti;
    if (this.notifications == false) {
      noti = 0;
    } else {
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
      if (data && data.type != '') {
        //this.sortBySelected =  data.type;
      }
      console.log(data);
    });
    sortModal.present();
  }

  logOut() {
    this.appStorage.deleteUserData()
      .then(() => {
        this.events.publish('set:root', 'LoginPage')
      })
  }
}
