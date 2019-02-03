import { ForgetPasswordPage } from './../forget-password/forget-password';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientProvider } from '../../providers/client/client';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  forgetPasswordPage:any = 'ForgetPasswordPage';
  loginData = {email: '', password: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, private clientProvider: ClientProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goPage(page){
    this.navCtrl.push(page);
  }

  goBack(){
    this.navCtrl.pop();
  }

  onLogin() {
    if (this.loginData.email&&this.loginData.password) {
      this.clientProvider.login(this.loginData)
        .subscribe(result=> {
          console.info({response:result});
          if (result.success) {
            this.navCtrl.setRoot('HomePage');

            // Nav To Home Page !
          } else {
            console.warn('Wrong Email Or Password');
          }
        })
    }
  }
}
