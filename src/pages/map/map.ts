import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { } from '@types/googlemaps';

declare var google;
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  pageType: string = '';

  viewSelected: string = 'map';

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public geoloction: Geolocation,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams) {

      this.pageType = this.navParams.get('pageType');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    let latLng = new google.maps.LatLng(20.5937, 78.9629);
    this.loadMap(latLng);
  }

  loadMap(latLng) {
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  getCurrentLocation(){
    this.geoloction.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude , position.coords.longitude );
      this.loadMap(latLng);
    });
  }

  autoSearchPage() {
    //this.navCtrl.push('AutoSearchPage');

    let autoSearchModal = this.modalCtrl.create('AutoSearchPage');
    autoSearchModal.onDidDismiss(data => {
      console.log(data);
    });
    autoSearchModal.present();
  }

  filter() {
    let filterModal = this.modalCtrl.create('FiltersPage');
    filterModal.onDidDismiss(data => {
      console.log(data);
    });
    filterModal.present();
  }

  returnModal(){
    if( this.pageType == '' ){
      this.navCtrl.push('BasicTabsPage');
    }else{
      this.navCtrl.pop();
    }
  }

  goView(){
    let ViewModal = this.modalCtrl.create('ViewPage',{typePage:'map'});
    ViewModal.onDidDismiss(data => {
      if( data.page != '' ){
        this.navCtrl.push(data.page);
      }
      console.log(data);
    });
    ViewModal.present();
  }
}
