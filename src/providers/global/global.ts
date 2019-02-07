import { ApiProvider } from '../api/api';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {

  constructor(public api: ApiProvider) {
    
  }

  getMain() {
    return this.api.get('main');
  }

  getAbout() {
    return this.api.get('about');
  }
  getBlog (){
    return this.api.get('blog');
  }
  getSearch (){
    return this.api.get('property/search');
  }

  getFavouriteList(){
    return this.api.get('favorite-list');
}
}
