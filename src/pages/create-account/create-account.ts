import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientProvider } from '../../providers/client/client';


/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  registerData = {FirstName: '', LastName: '',Email:'',Password:''};


  constructor(public navCtrl: NavController, public navParams: NavParams,private clientProvider: ClientProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  goBack(){
    this.navCtrl.pop();
  }
  onRegister() {
    if (this.registerData.Email&&this.registerData.FirstName&&this.registerData.LastName&&this.registerData.Password) {
      this.clientProvider.register(this.registerData)
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
