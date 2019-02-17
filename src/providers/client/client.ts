import { ApiProvider } from '../api/api';
import { Injectable } from '@angular/core';
import { GESTURE_PRIORITY_MENU_SWIPE } from 'ionic-angular/gestures/gesture-controller';
import { LoadingProvider } from '../loading/loading';
import { ToastProvider } from '../toast/toast';
import { App } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class ClientProvider {

  constructor(public api: ApiProvider,    public loading: LoadingProvider,
    public toast: ToastProvider, private storage: Storage, public app: App) {
  }

  login(loginData) {
    return this.api.post('clientSignIn', loginData);
  }

  postlogin(logindata:any){
    return new Promise((resolve)=>{

    let seq = this.api.post('auth', logindata ,{});


      seq.subscribe((res: any) => {
        
        if (res.success == true) {

          // alert("login successful")

           this.toast.presentToast(" login successfully ");

    
           this.storage.set('user_id', res.user_id).then((user_id) => {})

           this.loading.hideLoading();

         }    else {
          this.loading.hideLoading();
          this.toast.presentToast(res.errors.error_text);

        }
      }, err => {
        resolve(err);
        console.error('ERROR', err);
        
      });
 

})
}

  register(registerData) {
    return this.api.post('clientRegister', registerData);
  }
  ClientUpdate(){
    return this.api.post('clientupdate')
  }
  Properties(){
    return this.api.post('properties')
  }
  getClientProfile (clientProfile){
    return this.api.get('clientProfile',clientProfile);
  }

  fetchProperties(propertiesData) {
    return this.api.post('properties', propertiesData)
  }

}
