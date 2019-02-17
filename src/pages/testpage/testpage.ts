import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import{HttpProvider} from '../../providers/http/http';


@IonicPage()
@Component({
  selector: 'page-testpage',
  templateUrl: 'testpage.html',
})
export class TestpagePage {

  data :Observable<any>;
  dataGet:any;
  id:number;

  constructor(public navCtrl: NavController, public navParams: NavParams , public http : HttpProvider) {
  }

  // ionViewDidLoad() {
  //  this.data = this.http.get("property/"+79);
  //  this.data.subscribe(data =>{
  //    this.dataGet = data;
  //    console.log(this.dataGet);
  //  })
  // }

}
