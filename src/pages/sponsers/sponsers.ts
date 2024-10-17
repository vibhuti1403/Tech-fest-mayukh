import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SponsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sponsers',
  templateUrl: 'sponsers.html',
})
export class SponsersPage {
  public sponser = [
    {
      img_url: '../assets/cetpa.png',
      title: 'CETPA Pvt. Ltd.'
    },

    {
      img_url: '../assets/byju.jpg',
      title: `BYJU'S`
    }
  
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SponsersPage');
  }

}
