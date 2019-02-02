import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(
    public navCtrl: NavController, 
    private iab: InAppBrowser,
    public navParams: NavParams) {

    let startPosLat = 31.0402025;
    let startLng = 31.4837688;
    let endPosLat = 30.5428298;
    let endPosLng = 31.126792;
    let endPosName = 'Cairo';

   //window.open('geo://' + startPosLat + ',' +startLng+ '?q=' + endPosLat + ',' + endPosLng + '(' + endPosName + ')', '_system');

   let options = {
    location: 'yes',
    hidenavigationbuttons:'yes',
    toolbarposition: 'bottom',
    toolbarcolor: '#488aff',
    navigationbuttoncolor: '#ffffff',
    hideurlbar: 'yes',
    closebuttoncaption: 'close'
    };
    window.open('https://www.google.com/maps/dir/31.0402025,31.4837688/Cairo/@30.5428298,31.126792', '_system' , 'hideurlbar=yes');

    //window.open('https://www.google.com/maps/dir/31.0402025,31.4837688/Cairo/@30.5428298,31.126792', '_blank', 'location=no,fullscreen=yes,hideurlbar=yes,clearcache=yes,clearsessioncache=yes,zoom=no');
   //const browser = this.iab.create('https://www.google.com/maps/dir/31.0402025,31.4837688/Cairo/@30.5428298,31.126792' '_blank', 'toolbarcolor:#488aff,location:yes,hidenavigationbuttons:yes,toolbarposition:bottom,toolbarcolor:#488aff,hideurlbar:yes,closebuttoncaption:Close');
   //browser.show();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
