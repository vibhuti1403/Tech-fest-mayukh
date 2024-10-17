import { Component,ViewChild } from '@angular/core';
import { NavController,Content } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private dbRef;
  @ViewChild(Content) content: Content;

  constructor(private db: AngularFireDatabase,public navCtrl: NavController,public modalCtrl: ModalController) {

  }


  register() {

    const modal = this.modalCtrl.create('LoginPage',{},{enableBackdropDismiss:false});
    modal.present();
    
  }


  team() {

    this.navCtrl.push('TeamPage');


    
  }


  getData()
  {

    this.dbRef = this.db.list('Teams/' ,ref => ref.orderByChild('team').equalTo('testteam43'));
    // console.log(this.dbRef);
    // console.log('Query',this.db.list('Teams/' ,ref => ref.orderByChild('team').equalTo('testteam4')));
  }


  myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }


  scrollTo(elementId: string) {
    let y = document.getElementById(elementId).offsetTop;
    this.content.scrollTo(0, y);
    //this.w3_close();

  }

  Taketo(p)
  {
      if(p=='Events')
          this.navCtrl.push('EventsPage');
      else
      if(p=='Workshops')
      this.navCtrl.push('WorkshopsPage');
      else
      if(p=='Sponsers')
      this.navCtrl.push('SponsersPage');


  }


}
