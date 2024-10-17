import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the AcceptMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accept-money',
  templateUrl: 'accept-money.html',
})
export class AcceptMoneyPage {

  private dbRef;

  constructor(public alertController: AlertController,public navCtrl: NavController,private db: AngularFireDatabase, public navParams: NavParams,public angularFireAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad AcceptMoneyPage');
  }

  paidAmt(email,password)
  {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then((user) =>
    {

      
      
      if(user.emailVerified)
      
  {
      this.dbRef = this.db.list('Teams/'+user.user.uid);
      this.dbRef.set('Paid',true);

      this.alertController.create({
        title: 'Paid Amount',
        message: 'Thank you for paying',
        buttons: [
          {
            text: 'OK',
            role: 'cancel',
          }
        ],
        enableBackdropDismiss: true
      }).present();
    }

    else{

      this.alertController.create({
        title: 'Email Not Verified',
        message: 'Please Verify Email',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          }
        ],
        enableBackdropDismiss: true
      }).present();

      this.angularFireAuth.auth.signOut;


    }

      
    });


  }


}
