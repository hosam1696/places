import { ApiProvider } from '../api/api';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AppstorageProvider } from '../appstorage/appstorage';
import { Observable } from 'rxjs/Observable';
import{HttpProvider} from '../http/http';


@Injectable()
export class GlobalProvider {

  data:Observable<any>;
  getdata:any;

  constructor(public api: ApiProvider,private appStorage: AppstorageProvider,public http:HttpProvider) {
    
  }

  getMain() {
    return this.api.get('main');
  }
getProprity(id:Number){
  return this.api.get('proprity/'+id)
}

// test(id:number){
//   this.data = this.http.get('proprity/'+id);
// }


  getAbout() {
    return this.api.get('about');
  }
  getBlog (){
    return this.api.get('blog');
  }
  getSearch (body, params){
    return this.api.get('property/search', body, params );
  }
  

//   getFavouriteList(){
//     return this.api.get('favorite-list');
// }

getFavouriteList(api_token:any){
  return new Promise((resolve)=>{

 
  let seq=this.api.get('favorite-list',{api_token})
  seq.subscribe((res:any)=>{
    console.log(res);
    resolve(res);
  },
  err=>{
    console.error('ERROR', err);
    resolve(err);
  });



});
}
addtoFavouriteList( detailsid:any,api_token:any ){

  return new Promise((resolve)=>{

 
  let seq=this.api.get('add-to-favorite/'+detailsid,{api_token})
  seq.subscribe((res:any)=>{
    console.log(res);
    resolve(res);
  },
  err=>{
    console.error('ERROR', err);
    resolve(err);
  });



});
}
}
