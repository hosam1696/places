import { ForgetPasswordPage } from './../forget-password/forget-password';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientProvider } from '../../providers/client/client';
import { AppstorageProvider } from '../../providers/appstorage/appstorage';
import { UiProvider } from '../../providers/ui';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  forgetPasswordPage:any = 'ForgetPasswordPage';
  loginData = {email: '', password: ''};
  constructor(public navCtrl: NavController,private uiProvider: UiProvider,private appStorage: AppstorageProvider, public navParams: NavParams, private clientProvider: ClientProvider) {
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
            this.appStorage.saveUser(result.user)
              .then(()=>{
                this.navCtrl.setRoot('BasicTabsPage');
              })
          } else {
            this.uiProvider.showToast("Email & Password are not Correct");
          }
        }, err => {
          this.uiProvider.showToast(err.error.message);
        })
    }
  }
}
