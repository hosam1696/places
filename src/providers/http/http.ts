import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Injectable()
export class HttpProvider {

  url: string = 'http://tamleek-eg.com/tamlek/api/';

  constructor(public http: HttpClient) {
    
  }

  public get(url:string){
    this.url = this.url+url;
    return this.http.get( this.url);
  }


}
