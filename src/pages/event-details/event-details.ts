import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,AlertController } from 'ionic-angular';
import * as firebase from 'Firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class t{
  name: string;
  email: string;
  course:string;
  phone:string;
  cid:string;

 }

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {

  name:string;
  tagline:string;
  DateTime:string;
  Text:string;
  Rules:string;
  Image:string;
  teamsize:number;

  public returnArr:Array<t>;
  teamname:any;
  isRegistered:boolean;
  ref:any;
  private dbRef;
  teamExists:any;
  paid:boolean;

  constructor(public navCtrl: NavController,public alertController: AlertController,public angularFireAuth: AngularFireAuth,private db: AngularFireDatabase, public navParams: NavParams,public view:ViewController) {
    
    // this.val="a,b,c,d,e,f,g,h,i";
    // this.valarr=this.val.split(',');
    this.isRegistered=navParams.get('Registered');
    // if(this.isRegistered)
    // {
     this.name=navParams.get('Name');
    this.tagline=navParams.get('Tagline');
    this.DateTime=navParams.get('DateTime');
    this.Text=navParams.get('Text');
    this.Rules=navParams.get('Rules');
    this.Image=navParams.get('Image');
    this.teamsize=navParams.get('Teamsize');
    this.teamname=navParams.get('TeamName');
    this.returnArr=navParams.get('TeamMembers');
    this.paid=navParams.get('Paid');

    // console.log("PAID VAR",this.paid);
    // console.log("TEAM NAME",this.teamname);

    // if(this.name.includes("."))
    // {
      this.name=this.name.replace("."," ");
    //}
   
    // console.log('NAME:::',this.name);

    if(this.isRegistered)
    {
      //console.log('1',this.teamname,firebase.database().ref(this.name).orderByKey().equalTo(this.teamname));
      this.ref = firebase.database().ref(this.name).orderByKey().equalTo(this.teamname);
    this.ref.once("value",snapshot => {
      if (snapshot.exists()){
        this.teamExists=true;
      }
      else
      this.teamExists=false;
  });
  // .then(function(snapshot) {
  //   console.log('childexigiusts',this.teamname,this.name);
  //   //this.teamExists=snapshot.hasChild(this.teamname);
  // //this.teamExists=snapshot.hasChild('V6nQgvl5KjUmF4NanKDcshdhjC03');
  //   console.log('childexists',snapshot.hasChild(this.teamname));
  //   });   
  }

    console.log("TEAMNAME:",this.teamname);
    console.log("NAME:",this.name);
    //}
    

  }


  registerTeam()
  {
    if(this.teamExists)
    {
      this.alertController.create({
        title: 'Already Registered!',
        message: 'Your team is already registered for this event!',
        buttons: [
          {
            text: 'OK',
            role: 'cancel',
          }
        ],
        enableBackdropDismiss: true
      }).present();
      this.closeModal();
    }
    else
    {

      if(this.isRegistered==false)
    {
      alert('Please Register');
    }
    else{

      for(let j=0;j<this.returnArr.length;j++)
      {
        console.log(j,this.returnArr[j]);
        this.dbRef = this.db.list(this.name+'/'+this.teamname);
        this.dbRef.push(this.returnArr[j]);
      }

      this.closeModal();

    }

    }
  }

  getvalsArr(v:string[])
  {
    console.log('exists',v);
    if(this.teamExists)
    {
      this.alertController.create({
        title: 'Already Registered!',
        message: 'Your team is already registered for this event!',
        buttons: [
          {
            text: 'OK',
            role: 'cancel',
          }
        ],
        enableBackdropDismiss: true
      }).present();
      this.closeModal();
    }
    else
    {
   
    if(this.isRegistered==false)
    {
      alert('Please Register')
    }
    else{

    if(v.length!=this.teamsize)
    alert('Please select '+this.teamsize+' member(s)');
    else
    {
      for(let j=0;j<v.length;j++)
      {
        console.log(v[j],this.returnArr[v[j]]);
        this.dbRef = this.db.list(this.name+'/'+this.teamname);
        //this.dbRef.set(this.name+'/'+this.teamname,this.returnArr[j]);
        this.dbRef.push(this.returnArr[v[j]]);
      }
      this.closeModal();
    }

    }
  }
    
  }

  ionViewDidLoad() {
    console.log(this.teamname+"TEam"); 
    
  }


   
  closeModal()
{
  this.view.dismiss();

}

}
