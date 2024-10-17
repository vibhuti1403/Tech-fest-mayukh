import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {validate, IsEmail, MinLength, MaxLength,  IsNumberString} from "class-validator";

import * as firebase from 'Firebase';
import { error } from '@firebase/database/dist/esm/src/core/util/util';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



class t{
  
  @MinLength(1)
   name: string;

   @IsEmail()
   email: string;

   
   course:string;

   @MinLength(1)
   cid:string;

   @MinLength(10)
  @MaxLength(10)
  @IsNumberString()
   phone:string;
}

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @MinLength(2)
  teamNAme:string;
  @MinLength(1)
  teamPassword:string;

  testdata: t;  
  passdata:any;
  private dbRef;
  private dbTeams;
  checker:any;

  @MinLength(5)
  collegeName:string;

  public lenofarr:any;
  btn:any
  data:any;
  teamref:any;
  teamPresent:boolean;
  anArray:any=[];
  uid:any;

  constructor(public alertController: AlertController,private db: AngularFireDatabase,public angularFireAuth: AngularFireAuth,public navCtrl: NavController,public view:ViewController, public navParams: NavParams) {
  
  this.checker=true;
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad RegisterPage');
  }


  
  closeModal()
{
  this.view.dismiss();

}





myfunc(teamCollege)
{

  

  for(let i =0;i<this.anArray.length;i++){
    // this.anArray.push(new t);
   //  if(Validators.email(this.anArray[i].email))
   //   console.log('NAMES',Validators.email(this.anArray[i].email));
   //   else
   //   console.log('EMAIL',this.anArray[i].name);
      

   this.checker=true;
  
   validate(this.anArray[i]).then(errors => { // errors is an array of validation errors
    if (errors.length > 0) {

      //console.log('ERROS:',error);
      this.alertController.create({
        title: 'Invalid Details',
        message: 'Please Verify Your Details',
        buttons: [
          {
            text: 'OK',
            role: 'cancel',
          }
        ],
        enableBackdropDismiss: true
      }).present();
      
       // console.log("validation failed. errors: ", errors);
        this.checker=this.checker && false;
        if(i==this.anArray.length-1 && this.checker==false)
        {
          this.alertController.create({
          title: 'Invalid Details',
          message: 'Please Check Member Details',
          buttons: [
            {
              text: 'OK',
              role: 'cancel',
            }
          ],
          enableBackdropDismiss: true
        }).present();
      }


    } else {
        //console.log("validation succeed",this.checker && true);
        this.checker=this.checker && true;
        if(i==this.anArray.length-1 && this.checker==true)
        //alert('All correct');
        {


          this.angularFireAuth.auth.createUserWithEmailAndPassword(this.anArray[0].email, this.teamPassword)
          .then((res:any) => {
            
            // this.angularFireAuth.idToken.subscribe(user=>{
            //   console.log('1',user);
            //   console.log('2',res.user.uid);
            //   this.uid=user;
            // })
            
           // console.log('Please verify your email',res);
            this.angularFireAuth.auth.currentUser.sendEmailVerification()
                  .then((leader:any) => {
                    //  console.log('Please verify your email',res.uid);
                      this.teamNAme=this.teamNAme.toString().toLowerCase();

                      this.dbTeams = this.db.list('TeamIDs/');
                      this.dbTeams.set(this.teamNAme,res.uid);

                      this.dbRef = this.db.list('Teams/'+res.uid);
                      this.dbRef.set('Team',this.teamNAme);
                    this.dbRef.set('Password',this.teamPassword);
                    this.dbRef.set('College',teamCollege);
                    this.dbRef.set('Paid',false);

                        for(let j=0;j<this.anArray.length;j++)
                              this.dbRef.push(this.anArray[j]);
      
                              this.alertController.create({
                                title: 'Email Sent',
                                message: 'Please Verify Your Email and make payment to register for events',
                                buttons: [
                                  {
                                    text: 'OK',
                                    role: 'cancel',
                                  }
                                ],
                                enableBackdropDismiss: true
                              }).present();
                              this.closeModal();


                              
                  })
            
          }).catch((error) => {
            this.alertController.create({
              title: 'ERROR',
              message: error,
              buttons: [
                {
                  text: 'OK',
                  role: 'cancel',
                }
              ],
              enableBackdropDismiss: true
            }).present();
            //console.log('Error: ' + error);
        });
          
      
        
        
        
    }
  }

});



}

}
  goTo(team,clg,clgName,teamPass){


    this.teamNAme=team;
    this.teamPassword=teamPass;


    // validate(clg).then(errors => { // errors is an array of validation errors
    //   if (errors.length > 0) {
    //     alert("Please Select collge");
    //   }});

    if(clg!='other')
      clgName="Banasthali"

      


    if(!team || !teamPass || !clgName)

    {
      this.alertController.create({
        title: 'Incomplete Details',
        message: 'Please complete details',
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

      if(this.teamPresent==true)
      {

        this.alertController.create({
          title: 'Invalid TeamName',
          message: 'Teamname not unique!',
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
        if(this.teamPassword.length<6)
        {

          this.alertController.create({
            title: 'Invalid Password',
            message: 'Password must be atleast 6 characters',
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
        this.collegeName=clgName;
      this.data=true;
      
        this.myfunc(clgName);
        }

      }

      
        
    }
    

    

    // validate(this.teamNAme).then(errors => { // errors is an array of validation errors
    //   if (errors.length > 0) {
    //     alert("Please Enter a Valid Team Name")
    //   }
    //   else{

        // validate(this.teamPassword).then(errors => { // errors is an array of validation errors
        //   if (errors.length > 0) {
        //     alert("Please Enter a Valid Password")
        //   }
        //   else{
            
            
            // validate(this.collegeName).then(errors => { // errors is an array of validation errors
            //   if (errors.length > 0) {
            //     alert("Please Select collge");
            //   }
            //   else{
        
            //     alert("all right");
                

                     
        
            //   }});
    
    
        //   }
        // });


     // }});



  //  if(Validators.required(team))
  //  console.log('true','field required!');
   
    
//  if(this.checker)
//     console.log("CHECKER TRUE CORRCt",this.checker);
//     else
//     console.log("CHECKER FALSE inCORRCt",this.checker);
  }


  checkTeam(team)
  {

    this.teamref = firebase.database().ref('TeamIDs').orderByKey().equalTo(team);
    this.teamref.once("value",snapshot => {
      if (snapshot.exists()){
        this.teamPresent=true;
      }
      else
      this.teamPresent=false;
  });
    // this.db.object('TeamIDs/'+team).snapshotChanges().subscribe(action => {

    //   if(action.payload.val())
    //   {
    //     this.ex=true;
    //     console.log("EXISTS");
    //   }
    //   else
    //   {
    //     this.ex=false;
    //     console.log("NOPE");
    //   }
    //   console.log(action.type);
    //   console.log(action.key)
    //   console.log(action.payload.val())
    // });
  }


  Add(key){
      //console.log('key',key);
      this.anArray=[];
      for(let i =0;i<key;i++){
        this.anArray.push(new t);
      //  console.log('this.anArray',this.anArray);
      }
  
      this.btn=true;
  }
}