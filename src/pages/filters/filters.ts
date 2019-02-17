import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Form, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { GlobalProvider } from '../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})
export class FiltersPage {
  serchdetails:any;
  commercial_type:string='3';
  propertystat:string='sale';
  minprice:string='None';
  maxprice:string='None';
  minbed:string='None';
  maxarea:string='None'
  maxbed:string='None';
  type1: string = 'sale';
  type2: string = 'All' ;
  type3: string = 'None' ;
  type4: string = 'None' ;
  type5: string = 'None' ;
  type6: string = 'None' ;
  type7: string = 'None' ;
  type8: string = 'None' ;
prototypes:any=[];
proptypeid:any;
  typeMulti: any = [];
  constructor(
    public navCtrl: NavController, 
    public viewCtrl: ViewController,
    private globalProvider: GlobalProvider,
     public http: HttpClient,
     public storage:Storage,
    public navParams: NavParams) {
    

  }

  async ionViewDidLoad() {
    this.prototypes = await this.storage.get('prototypes')
    this.proptypeid=this.prototypes.propertytypes[0].id
    console.log(this.prototypes.propertytypes[0].id)
    console.log('ionViewDidLoad FiltersPage');

  }

  sendPostRequest() {
    let body = { 
    'commercial_type': this.proptypeid,
    'propertystat':this.propertystat,
    'minprice':this.minprice,
    'maxprice':this.maxprice,
    'minbed':this.minbed,
    'maxarea':this.maxarea,
    'maxbed':this.maxbed,
    'properitytype_id': this.proptypeid

}
    // this.http.post("http://tamleek-eg.com/tamlek/api/property/search",body )
    this.globalProvider.getSearch(null, body)
      .subscribe( (data:any) => {
        this.serchdetails=data;
        console.log(data)
        console.log('%c ALL Filtered Properties', 'font-weight: bold; color: green', data.properties.data);
             }
            )
  }

  onSubmit(form: NgForm){
    console.log('form');
    console.log(form.value);
  }

  Reset(){
    this.type1 = 'sale';
    this.type2 = 'All' ;
    this.type3 = 'None' ;
    this.type4 = 'None' ;
    this.type5 = 'None' ;
    this.type6 = 'None' ;
    this.type7 = 'None' ;
    this.type8 = 'None' ;
    this.typeMulti  = [];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
