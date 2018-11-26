import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Form, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})
export class FiltersPage {

  type1: string = 'sale';
  type2: string = 'All' ;
  type3: string = 'None' ;
  type4: string = 'None' ;
  type5: string = 'None' ;
  type6: string = 'None' ;
  type7: string = 'None' ;
  type8: string = 'None' ;

  typeMulti: any = [];
  constructor(
    public navCtrl: NavController, 
    public viewCtrl: ViewController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltersPage');
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
