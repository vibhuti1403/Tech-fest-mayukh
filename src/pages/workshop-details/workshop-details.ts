import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the WorkshopDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workshop-details',
  templateUrl: 'workshop-details.html',
})
export class WorkshopDetailsPage {



  workshopName:string;
  workshopMembers:string;
  workshopImg:string;
  workshopDuration:string;
  workshopDate:string;
  workshopContent:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public view:ViewController) {

  this.workshopName=navParams.get('workshopName');
  this.workshopMembers=navParams.get('workshopMembers');
  this.workshopImg=navParams.get('workshopImg');
  this.workshopDuration=navParams.get('workshopDuration');
  this.workshopDate=navParams.get('workshopDate');
  this.workshopContent=navParams.get('workshopContent');

  }

  ionViewDidLoad() {
   // console.log('ionViewDidLhvoad WorkshopDetailsPage');
  }

  closeModal()
{
  this.view.dismiss();

}
 
}
