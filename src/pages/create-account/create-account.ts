import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientProvider } from '../../providers/client/client';
import { UiProvider } from '../../providers/ui';

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  registerData = { name: '', email: '',  password: '',address: '', phone: '', password_confirmation:'' };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private clientProvider: ClientProvider,
    private uiProvider: UiProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  goBack() {
    this.navCtrl.pop();
  }
  
  onRegister() {
    if (Object.values(this.registerData).every(Boolean)) {
      const registerData = {
        ...this.registerData,
       
        name:this.registerData.name,
        email:this.registerData.email,
        password:this.registerData.password,
        address:this.registerData.address,
        phone:this.registerData.phone,
        password_confirmation: this.registerData.password_confirmation,
      };
      this.clientProvider.register(registerData)
        .subscribe(result => {
          console.info({ response: result });
          if (result.success) {
            this.navCtrl.setRoot('HomePage');
            // Nav To Home Page !
          } else {
            console.warn('Wrong Email Or Password');
            this.uiProvider.showToast(result.message);
          }
        }, err => {
          // console.error({err})
          this.uiProvider.showToast(err.error.message);
        })
    } else {
      console.warn('Please Fill All Fields');
      this.uiProvider.showToast('Please Fill All Fields');
    }
  }

}
