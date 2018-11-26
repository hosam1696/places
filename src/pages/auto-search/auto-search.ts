import { Geolocation } from '@ionic-native/geolocation';

import { NavController, NavParams } from 'ionic-angular';
import { Component, NgZone } from '@angular/core';
import { ViewController, MenuController } from 'ionic-angular';
declare var google;

@IonicPage()
@Component({
  selector: 'page-auto-search',
  templateUrl: 'auto-search.html',
})
export class AutoSearchPage {

  autocompleteItems;
  autocomplete;
  map;
  service = new google.maps.places.AutocompleteService();

  //service = new google.maps.places.AutocompleteService();
  //service = new google.maps.places.PlacesService();
  constructor(public viewCtrl: ViewController,
    private zone: NgZone, private params: NavParams,
    private menucontroller: MenuController,
    private geolocation: Geolocation) {
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
    //this.menucontroller.enable(false , 'MainMenu');
    this.map = this.params.get('Map');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    console.log('chooseItem');
    console.log(item);
    this.viewCtrl.dismiss(item.PlaceFormatedCode);
  }

  updateSearch() {
    console.log(this.autocomplete.query);
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    var options = {
      enableHighAccuracy: true,
      maximumAge: 0
    };
    this.geolocation.getCurrentPosition(options).then(userpos => {
    let me = this;
    var pyrmont = new google.maps.LatLng(userpos.coords.latitude,userpos.coords.longitude);
    this.service.getPlacePredictions({ input: this.autocomplete.query , location : pyrmont , radius : userpos.coords.accuracy}, function (predictions, status) {
      me.autocompleteItems = []; 
      me.zone.run(function () {
        if (predictions == null){
          return;
        }
        predictions.forEach(function (prediction) {
          console.log(prediction);
          me.autocompleteItems.push({ PlaceFormatedCode : prediction.description , Title : prediction.structured_formatting.main_text, icon : 'assets/imgs/Maps-Pin-Place-icon.png' });
        });
      });
    });
  });
  }

}
