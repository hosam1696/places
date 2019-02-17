import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadingProvider {
  loading:any
  constructor(public Loading: LoadingController) {
    console.log('Hello LoadingProvider Provider');
    
  }
  presentlogin(){
    this.loading = this.Loading.create({
      content: "login....."
    });
    return this.loading.present();
  }
  presentLoading() {
    this.loading = this.Loading.create({
      content: 'Please wait..',
      spinner: 'crescent',
      dismissOnPageChange:false
    })
    return this.loading.present();
  }
  presentLoadingUpload(){
    this.loading = this.Loading.create({
      content: "Uploading..."
    });
    return this.loading.present();
  }
  // Hide loading option
  hideLoading() {
    return this.loading.dismiss().catch((e)=>{
      console.log(e);
    });
  }

}
