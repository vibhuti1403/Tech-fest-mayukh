import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'Firebase';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 class t{
  name: string;
  email: string;
  course:string;
  phone:string;

 }

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  dbRef:any;
  members:any;
  rooms=[];
  vals:any;
  teamname:any;
  teampass:any;
  public returnArr:Array<t>;
  public Data:Array<t>;

  ref = firebase.database().ref('Teams/JbFvT8i1i4ZFAC5LhjGBnUdezo23');
  constructor(private db: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {

    this.vals=false;
    this.dbRef = this.db.list<t>('/Teams/JbFvT8i1i4ZFAC5LhjGBnUdezo23');
//     this.returnArr=[
// {name: "name1",email: "email1",course:"c1",phone:"phone1"},
// {name: "name2",email: "email2",course:"c2",phone:"phone2"},
// {name: "name3",email: "email3",course:"c3",phone:"phone3"},
// {name: "name4",email: "email4",course:"c4",phone:"phone4"},
// {name: "name5",email: "email15",course:"c5",phone:"phone5"},
//     ];
  }

  getvalsArr(v:string[])
{
  if(v.length>3)
  alert('Please select 3 vals only');
  else
  {
    for(let j=0;j<v.length;j++)
    console.log(j,this.returnArr[j]);
  }
  
}

getvals(value)
{
  console.log(value);
}
  goTo()
  {
    this.vals=true;
  //   for(let i=0;i<this.returnArr.length-2;i++)
  // {
  //   this.Data.push(this.returnArr.);

  // }
  //console.log(this.Data);

  }
  ionViewDidLoad() {

    
    console.log('probleme :');
    this.ref.on('value', resp => {

      this.returnArr = [];
      resp.forEach(snap => {
        this.returnArr.push(snap.val());
        return false;
      });

      this.vals=true;
      this.teamname=this.returnArr.pop();
      this.teampass=this.returnArr.pop();
      console.log(this.returnArr);
      console.log(this.teamname,this.teampass);
      
    });
   








    //   this.rooms = snapshotToArray(resp.forEach(child=>
    //   {
        
    //     snapshotToArray(child);
        
    //   }));
    //   // console.log("probleme : ", resp,resp.toJSON);
    //   // console.log("json : ", resp.toJSON);
    //   // console.log("probleme : ", resp.child('team'));
    //   // console.log("probleme : ", resp.val);
    //   // console.log("value : ", this.rooms);
    // });

    // console.log("probleme : ", this.dbRef.get('team'));
    
    // this.dbRef.valueChanges().subscribe((datas) => { 
    //   console.log("datas", datas)
    // },(err)=>{
    //    console.log("probleme : ", err)
    // });
    
  }

}

// export const snapshotToArray = snapshot => {
  
//   snapshot.forEach(childSnapshot => {

//       let item = childSnapshot.val()+" KEY "+childSnapshot.key;
//       returnArr.push(item);
//   });

//   console.log("probleme : ", returnArr);
//   return returnArr;
// };
