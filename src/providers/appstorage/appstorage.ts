import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class AppstorageProvider {

  constructor(public storage: Storage) {
    console.log('Hello AppstorageProvider Provider');
  }

  getSavedUser() {
    return this.storage.get('places:saved:user')
  }

  saveUser(userData) {
    return this.storage.set('places:saved:user', userData)
  }
  getToken(){
    return this.storage.get('token')

  }
  saveToken(userToken){
    return this.storage.set('token',userToken)

  }
  deleteUserData() {
    return this.storage.remove('places:saved:user')
  }

}
