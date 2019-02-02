import { ApiProvider } from '../api/api';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientProvider {

  constructor(public api: ApiProvider) {
  }

  login(loginData) {
    return this.api.post('clientSignIn', loginData);
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
}
