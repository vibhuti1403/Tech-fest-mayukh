import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public alertController: AlertController,public angularFireAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public view:ViewController,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }


  closeModal()
{
  this.view.dismiss();

}
  register()
  {
    this.view.dismiss();
    const modal = this.modalCtrl.create('RegisterPage',{},{enableBackdropDismiss:false});
    modal.present();
  }


  teamlogin()
  {

    this.navCtrl.push('AcceptMoneyPage');
    this.closeModal();
  }


  login(email,password){

    if(email=="registration" && password=="mayukh19")
    {
        this.teamlogin();
    }
    else{

    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then((user) =>
     {
       if(user.emailVerified)
      {
        this.closeModal();
        this.alertController.create({
          title: 'Login Successful',
          message: 'You have loogged in',
          buttons: [
            {
              text: 'OK',
              role: 'cancel',
            }
          ],
          enableBackdropDismiss: true
        }).present();
      }
      else
      {
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

        this.angularFireAuth.auth.signOut();
      }

   }).catch((error) => {
    this.alertController.create({
      title: 'Invalid Details',
      message: 'Invalid email or password',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ],
      enableBackdropDismiss: true
    }).present();

    //console.log('Error: ' + error);
});

}
  

  }
}
