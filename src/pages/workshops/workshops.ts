import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the WorkshopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class workshops
{
  workshopName:string;
  workshopMembers:string;
  workshopImg:string;
  workshopDuration:string;
  workshopDate:string;
  workshopContent:string;
};

@IonicPage()
@Component({
  selector: 'page-workshops',
  templateUrl: 'workshops.html',
})
export class WorkshopsPage {

  @ViewChild(Content) content: Content;

  Inhouse: workshops[];
  Outhouse: workshops[];

  

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public angularFireAuth: AngularFireAuth) {

    

    this.Inhouse = [
      {workshopName: 'Play with Scratch ', workshopMembers:' Sukanya Sumukhi Gahlaut, Yukta Bhatia, Vidushi Saini, Sonali Mishra, Srishti', workshopImg: "../assets/Play_with_Scratch.jpg",
      workshopDuration: '4-5 Hours',
      workshopDate: '', workshopContent: `"Come to make your own games interactive stories." 
      Scratch is a block based visual programming language and online community target primarily at children.  `},
      {workshopName: 'Red Hat Linux', workshopMembers:' Kritika verma', workshopImg: "../assets/Red_Hat_Linux.jpg",
      workshopDuration: '4-5 Hours',
      workshopDate: '', workshopContent: `Widely used in enterprises and helps in earning brownie point in the recruitment process. 
      The workshop consist of creating, managening and monitoring Linux process. `},
      {workshopName: 'Design your own Logo', workshopMembers:' Vaishali Bhasneria, Urvika Shakya, Sneha maurya', workshopImg: "../assets/Design_your_own_logo.jpg",
      workshopDuration: '3-4 Hours',
      workshopDate: '', workshopContent: 'Join to learn graphic skills to design your own logo through adobe.'},
      {workshopName: 'Interaction with Block chain', workshopMembers:'Srishti Khandelwal', workshopImg: "../assets/Interaction_with_Blockchain.jpg",
      workshopDuration: '3-4 Hours',
      workshopDate: '', workshopContent: `Learn How one can work. 
      On this edge cutting technologies and understand cryptocurrency by using TRON BLOCKCHAIN.`},
      {workshopName: 'Android app', workshopMembers:' Vibhuti Rajpal, Swati Chopra, Shipra yadav', workshopImg: "../assets/Android_App.jpg",
      workshopDuration: '4-5 Hours',
      workshopDate: '', workshopContent: `Create a basic hybrid app on your own which will have many benefits over pure native apps specially in terms of platform support and speed of development.`},
      {workshopName: 'Placement Decoded', workshopMembers:'Shivani Gupta, Saundarya Tyagi ', workshopImg: "../assets/Placement_Decoded.jpg",
      workshopDuration: '4 Hours',
      workshopDate: '', workshopContent: `Join the boot camp oncompetetive programming for acing technical interviews and to explore various comptetive fields.`},
      {workshopName: 'Recursion', workshopMembers:'Dr. Kusum ', workshopImg: "../assets/Recursion.jpg",
      workshopDuration: '2 Hours',
      workshopDate: '', workshopContent: `Learn how to play with recursion`},
      {workshopName: 'Play with Pointers', workshopMembers:'Dr. Kusum ', workshopImg: "../assets/Play_with_Pointers.jpg",
      workshopDuration: '',
      workshopDate: '', workshopContent: `Store your memory address with a pointer and ace on C & C++ codes.`},
      {workshopName: 'Dance', workshopMembers:'Shivangi Sharma, Sneha Maurya, Divya Sharma, Urvika Shakya, Shivani Tiwari, Ananya Yadav', workshopImg: "../assets/Dance.jpeg",
      workshopDuration: '2 Hours',
      workshopDate: '', workshopContent: `"Why walk ?When you can Dance!" So put on your shoes and pull up your socks beacause we are presenting you a workshop which has a flavour of ZUMBA, BOLLYWOOD STYLES, and a mix of western moves.`},
      {workshopName: ' Stenography & Calligraphy ', workshopMembers:'Ashita Jain, Bhavna Singh, Divya Priyadarshani', workshopImg: "../assets/Stenography_and_Calligraphy.jpg",
      workshopDuration: '3 Hours',
      workshopDate: '', workshopContent: `"Calligraphy is perfect combination of LANGUAGE, ART and HUMAN CONNECTION" Come learn te fastes way of writing, STENOGRAPHY/SHORT HANND; and explore th beauty of writing.`},
      {workshopName: 'Craft ', workshopMembers:'Megha, Saumya Bahuguna, Aditi Uniya, Pragya Thaledi', workshopImg: "../assets/Craft.jpeg",
      workshopDuration: '2-2.5 Hours',
      workshopDate: '', workshopContent: `"In crafting there was no mistakes just unique creations". 
      Now is the TIME to put on creative hats and learn how to make EXPLOSION BOXES, PHOTO FRAMES and HOMEMADE HAPPINESS.. `},
      {workshopName: 'Quilling', workshopMembers:'Shreya Agrawal, Shreya Gupta, Shruti Shukla', workshopImg: "../assets/Quilling.jpeg",
      workshopDuration: '2 Hours',
      workshopDate: '', workshopContent: `"When live gives you hands make handmade quiling cards". 
      Creativity never goes out of style, and style is what you need when your making quiling cards.  `},
      {workshopName: 'Meditation', workshopMembers:'Swati Negi, Yukti ', workshopImg: "../assets/Meditation_Meet.jpg",
      workshopDuration: '2 Hours',
      workshopDate: '', workshopContent: `"The thing about mediation is! You Become more and mor you.
      "Keep calm and come to MEDITATION MEET to control your thoughts and stop lifting them control you.`},
      {workshopName: 'Palmistry', workshopMembers:'Stuti yadav ', workshopImg: "../assets/Palmistry.jpg",
      workshopDuration: '3.5 Hours',
      workshopDate: '', workshopContent: `"Often the hands will solvea mystery that the intellect has struggled with in vain". 
      Come learn how to see the vivid possibilities of your FUTURE and become your own destiny's master.`},
      {workshopName: 'Latex', workshopMembers:'Ms. Preeti ', workshopImg: "../assets/Latex.png",
      workshopDuration: '3-4 Hours',
      workshopDate: '', workshopContent: 'A document preparation system with feature designed for production of technical and scientific document on research papers. '},
      {workshopName: '2D - 3D Auto CAD', workshopMembers:'Jyoti Tomar, Jyoti Kumar Shalu ', workshopImg: "../assets/2D-3D_Autocad.jpg",
      workshopDuration: '3-4 Hours',
      workshopDate: '', workshopContent: `Upgrade your knowledge of autocad by this advanced level of autocad 2D - 3D workshop. 
      Also, get to know about product manufacturing.Upgrade your knowledge of autocad by this advanced level of autocad 2D - 3D workshop. Also, get to know about product manufacturing.`},
      {workshopName: 'Image Proccessing with MATLAB', workshopMembers:' Malvika Tula', workshopImg: "../assets/Image_Processing_with_Matlab.jpg",
      workshopDuration: '4-5 Hours',
      workshopDate: '', workshopContent: `Come and learn the analysis and manupluation of a digitialized image with this workshop using  MATLAB.`},
      {workshopName: 'Arduino Basics', workshopMembers:'Mr. Ashish ', workshopImg: "../assets/Arduino_Basics.jpg",
      workshopDuration: '',
      workshopDate: '', workshopContent: `Ardino is an open source electronics platform based on easy-to-use hardware and software. 
      So its time to come and learn the basics of your key to all interactive projects.`},
      {workshopName: 'Atmega Microcontroller', workshopMembers:'Kriti Tiwari, Yashika Gupta ', workshopImg: "../assets/Atmega_Microcontroller.jpg",
      workshopDuration: '3-4 Hours',
      workshopDate: '', workshopContent: `Learn the proteous interfacing AUR studios , atmega microcontroller and data sheet studies.`},
      {workshopName: 'PLC', workshopMembers:'Riya Rauthan, Rishika Poswal, ', workshopImg: "../assets/PLC.jpg",
      workshopDuration: '7 Hours',
      workshopDate: '', workshopContent: `Practicals knowledge always gives you the extra edge . So come and learn about the modular mechatronics systems that are usedin the industries.`},
      {workshopName: 'CIMS lab', workshopMembers:'Anusha ', workshopImg: "../assets/CIMS_lab.jpg",
      workshopDuration: ' 8 Hours',
      workshopDate: '', workshopContent: `Best combination computer controlled manufacturing and automation system can be learned here. So join to learn uses of real time sensors and closed loop control processes .`},
      {workshopName: '3D Printing ', workshopMembers:'Prachi ', workshopImg: "../assets/3D_Printing.jpg",
      workshopDuration: '8 Hours',
      workshopDate: '', workshopContent: `Print your imagination into reality by 3D printers .`},
    ];

    this.Outhouse =
    [
      { workshopName:"Cognitive Computing",workshopMembers:"TechieNest Pvt. Ltd.",workshopDate: '', workshopImg:"../assets/Cognitive_Science.png",workshopDuration:` 16 hrs \n 
      Date: 11th and 12th March`, workshopContent:`The goal of cognitive computing is to simulate human thought processes in a computerized model.  
      Cost: 500 INR` },
      { workshopName:"Data Analytics with R",workshopDate: '',workshopMembers:"CETPA Pvt. Ltd.",workshopImg:"../assets/Data_Analytics_with_R.jpg",workshopDuration:` 16 hrs \n 
     Date: 11th and 12th March`, workshopContent:`Data analytics with R is an exploratory data analysis, it is an apporach of data analysis employed for summarizing and visualizing data sets. 
      Cost: 350 INR ` },
     { workshopName:"Vedic Mathematics",workshopDate: '',workshopMembers:"WEPIAT Pvt. Ltd.",workshopImg:"../assets/vedic-maths.jpg",workshopDuration:`3 hrs \n
     Date: 12th March`, workshopContent:`Vedic Mathematics is a collection of Techniques to solve mathematical arithmetics in easy and faster way. 
           Cost: 300 INR` },
     { workshopName:"Sixth Sense Robotics",workshopDate: '',workshopMembers:"Wingfotech Pvt. Ltd.",workshopImg:"../assets/Sense_Robotics.jpg",workshopDuration:` 16 hrs \n 
     Date: 11th and 12th March`, workshopContent:`Sixth sense technology is going to change the physical world around you with natural hand gestures used to interact with digital information. 
            Cost: 500 INR` },
     { workshopName:"IOT With Rasberry PI",workshopDate: '',workshopMembers:"Industrial Hub Technologies",workshopImg:"../assets/IOT_with_Rasberry_Pi.png",workshopDuration:` 16 hrs \n 
     Date: 11th and 12th March`,workshopContent:`Raspberry Pi isn't just a platform for building internet of things but a super platform for learning about IOT.
           Cost: 450 INR` },
     { workshopName:"Aglile and Product Management",workshopDate: '',workshopMembers:"Pivotal Vitality Consultancy",workshopImg:"../assets/Agile_and_Product _Management.png",workshopDuration:`7 hrs \n 
     Date:  12th March`,  workshopContent:`Approach to software development under which requirements and solutions evolve through the collaborative effort of self-organizing and cross-functional teams and their customer(s)/end user(s).
          Cost: 250 INR  ` },
     { workshopName:"Aeromodelling",workshopDate: '',workshopMembers:"School of Aviation, Banasthali Vidyapith",workshopImg:"../assets/Aeromodelling.jpg",workshopDuration:` 16 hrs \n 
     Date: 4th and 5th March`,workshopContent:`Aeromodelling is the activity of making working aircraft models on your own. Also,doing this workshop on your by the guidance will improve your engineering skills.
            Cost: 750 INR` },

          {workshopName: 'Machine  Learning with Python', workshopMembers:'', workshopImg: "../assets/Machine_Learning_with_python.jpg",
      workshopDuration: '16 hrs \n  Date: 11th and 12th March',  workshopDate: '', workshopContent: `"An inductive approach to recognise pattern in data". Opportunities to do data science with K means clustering. 
      Cost: 400 INR `},
      
    
     
    ];






  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad WorkshopsPage');
  }


  scrollTo(elementId: string) {
    let y = document.getElementById(elementId).offsetTop;
    this.content.scrollTo(0, y);
    this.w3_close();
  }

  clickedOuthouse(idx)
  
  {
  const modal = this.modalCtrl.create('WorkshopDetailsPage',{

  workshopName:this.Outhouse[idx].workshopName,
  workshopMembers:this.Outhouse[idx].workshopMembers,
  workshopImg:this.Outhouse[idx].workshopImg,
  workshopDuration:this.Outhouse[idx].workshopDuration,
  workshopDate:this.Outhouse[idx].workshopDate,
  workshopContent:this.Outhouse[idx].workshopContent

  });
  modal.present();
  }


  clickedInhouse(idx)
  {
  const modal = this.modalCtrl.create('WorkshopDetailsPage',{

  workshopName:this.Inhouse[idx].workshopName,
  workshopMembers:this.Inhouse[idx].workshopMembers,
  workshopImg:this.Inhouse[idx].workshopImg,
  workshopDuration:this.Inhouse[idx].workshopDuration,
  workshopDate:this.Inhouse[idx].workshopDate,
  workshopContent:this.Inhouse[idx].workshopContent

  });
  modal.present();
  }

  
  logout()
  {
    
    this.angularFireAuth.auth.signOut();
    //console.log(this.angularFireAuth.auth,this.angularFireAuth.auth.signOut());
    this.w3_close();
    this.navCtrl.setRoot(HomePage);
  } 


  w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

}
