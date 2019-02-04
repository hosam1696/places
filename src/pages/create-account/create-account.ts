import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientProvider } from '../../providers/client/client';
import { UiProvider } from '../../providers/ui';
import { AppstorageProvider } from '../../providers/appstorage/appstorage';

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  registerData = { name: '', email: '', password: '', address: '', phone: '', password_confirmation: '' };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private clientProvider: ClientProvider,
    private uiProvider: UiProvider,
    private appStorage: AppstorageProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  goBack() {
    this.navCtrl.pop();
  }


  onRegister() {
    if (this.registerData.email && this.registerData.password && this.registerData.name && this.registerData.address && this.registerData.password_confirmation && this.registerData.phone) {
      this.clientProvider.register(this.registerData)
        .subscribe(result => {
          console.info({ response: result });
          if (result&&result.id) {
            this.appStorage.saveUser(result)
              .then(()=>{
                this.navCtrl.setRoot('BasicTabsPage');
              });
          } else {
            this.uiProvider.showToast(result.message);
          }
        }, err => {
          // console.error({err})
          this.uiProvider.showToast(err.error.message);
        })
    }
  }

}
