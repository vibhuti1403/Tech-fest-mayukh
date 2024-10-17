import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'Firebase';

import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class events
{
  eventName:string;
  eventMembers:number;
  eventImg:string;
  eventTagline:string;
  eventText:string;
  eventRules:string;
  eventTime:string;
};

class t{
  name: string;
  email: string;
  course:string;
  phone:string;
  cid:string;

 };

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})

export class EventsPage {

  @ViewChild(Content) content: Content;

  maths: events[];
  electronics: events[];
  aviation: events[];
  cs: events[];
  fun: events[];
  phychem: events[];
  ref:any;
  public returnArr:Array<t>;
  teamname:any;
  teampass:any;
  teamcollege:any;
  isRegistered:boolean;
  teamPaid:any;
 

  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public angularFireAuth: AngularFireAuth){
   
  

    this.maths = [
      {eventName: 'Codath', eventMembers: 1, eventImg: "../assets/codath.jpg",
      eventText: `Based on coding skills, numerical analysis,mensuration and matrices.\nThe team participating must have basic knowledge of C/C++/Java and should be able to build logic.`,
      eventTagline: 'Face the pace', eventRules: '',eventTime:'12 March 2019 ,9 a.m.-11 a.m.'},
      {eventName: 'Eco-know-metrics', eventMembers: 2, eventImg: '../assets/econometrics.jpg',
       eventText: `Based on the knowledge of Economics.\nThis event will test the participants’ knowledge about basic economics, current economic affairs, real life situation based problems and solving Economics numerical by using mathematical methods.`,
       eventTagline: 'Engage with the science of Alternatives',eventRules:'',eventTime:'11 March 2019 ,4 p.m.-5 p.m.'},
      {eventName: 'Escape the calculus', eventMembers: 2, eventImg: '../assets/escape_the_calculus.jpg',
      eventText: `Based on the pure and applied calculus.\nThis event will test the knowledge of calculus (Limits, Continuity, Differentiation, Integration, Differential Equations). The level of the questions will be increased after every round.`,
      eventTagline: 'Just ʃdu It',
       eventRules:' ',eventTime:'11 March 2019 ,11 a.m.-1 p.m.'},
      {eventName: 'Cypher', eventMembers: 2, eventImg: '../assets/cypher.jpg',
      eventText: `This event checks the basic calculative and geometrical knowledge.\nThis event will test participants’ knowledge about basic profit and loss problems, word problems and basic geometric questions.`,
      eventTagline: 'Solve it before you start it', eventRules: '',eventTime:'12 March 2019 ,2 p.m.-4 p.m.'},
      {eventName: 'Numeric War', eventMembers: 2, eventImg: '../assets/numeric_war.jpg',
      eventText: `A war of numbers with a tincture of clue hunts to get back to the basic concepts of mathematics.\nThis event tests the participants’ proficiency in all the different concepts of mathematics we have studied all through our academic life till now.`,
      eventTagline: 'getting back to your square roots', eventRules: '',
      eventTime:'Prelims: 6 March 2019 ,5:30 p.m. \nFinal:11 March 2019 ,2 p.m.-4 p.m.'},
      {eventName: 'Stack it!Snatch it!', eventMembers: 1, eventImg: '../assets/stack_it_snatch_it.jpg',
      eventText: `Based on statistics.\nThis event is completely based on statistics and in addition to statistics it also checks the calculative speed and presence of mind of the student.`,
      eventTagline: 'Just stack up your minds with stats', eventRules: '',eventTime:'12 March 2019,9 a.m.-11 a.m.'},
      {eventName: 'Stat-o-way', eventMembers: 2, eventImg: '../assets/stat-o-way.jpg',
      eventText: `Based on statistical interpretation and inference Ever considered traffic in Banasthali as a statistics problem? Showcase your statistical skills to explain and present this problem.\nThe team participating have to submit a report on the topic- Traffic in Banasthali.`,
      eventTagline: 'Way to statistics', eventRules: '',eventTime:'11 March 2019 ,4 p.m.-5 p.m.'},
      {eventName: 'Trimension' , eventMembers: 2, eventImg: '../assets/trimension.gif',
      eventText: `This event will test the participants’ caliber in 3 spheres: calculation, quiz and games.Participants are supposed to have knowledge about- 
      i) Trigonometry ii) Algebra iii) Complex numbers`, 
      eventTagline: 'Grave are the dimensions', eventRules: '',eventTime:' 12 March 2019 ,2 p.m.-4 p.m.'}
    ];



    this.electronics = [
      {eventName:  'Conundrum', eventMembers: 3, eventImg: '../assets/conundrum.jpg',
      eventText: `Based on Microprocessor & Microcontroller, Control system and Communication System.\nThe event consists of rounds where the questions asked will be based on basic MM / control systems / Communication System. `,
      eventTagline: 'Connecting the possibilities', eventRules: '',eventTime:'11 March 2019 ,11 a.m.-1 p.m.'},
      {eventName: 'Electrocaza', eventMembers: 2, eventImg: '../assets/electrocaza.jpg',
      eventText: `Based on Basic electronics.\nThe team participating must have basic knowledge of the terminologies and concepts used in basic electronics. `,
      eventTagline: 'Engineering.Surveying.Solutions',
      eventRules:'',eventTime:'12 March 2019 ,9 a.m.-11 a.m.'},
      {eventName: 'Innovance', eventMembers: 1, eventImg: '../assets/innovance.gif',
      eventText: `Time to showcase your knowledge in technology.\n
      The team participating must write an abstract on the following topics \n1.	Wireless battery charger\n2.	Brain fingerprint technology\n3.	Future’s fastest transcars
4.	3D integrated Circuit \n5.	Plasmonics- Vision for future\n6.	Plastic solar cells\n7.	Using the theory of biometrics`,
      eventTagline: 'Let your mind write the paper, not your hand', 
      eventRules:'1.Abstract should not exceed 300 words ',eventTime:' 12 March 2019, 2 p.m.-4 p.m.'},
      {eventName: 'Qriozity', eventMembers: 2, eventImg: '../assets/qriozity.jpg',
      eventText: `This event is a technical quiz based event on power electronics, AICE, EMI, Digital and Analog Communication.\nThe team participating must have basic knowledge of the terminologies used and concepts in power electronics, AICE, EMI, Digital and Analog Communication.`,
      eventTagline: 'does your gray matter?', eventRules: '',eventTime:'11 March 2019 ,2 p.m.-4 p.m.'},
      {eventName: 'Trovo Trace', eventMembers: 2, eventImg: '../assets/trovo_trace.gif',
      eventText: `Make a robot that navigates through a maze in the quickest time.\n\nParticipants will make a robot that navigates through a maze in the quickest time possible from the designated starting point to the ending point.`,
      eventTagline: 'Race for glory', eventRules: '1.Abstract submitted should not exceed 300 words.\n 2. Last Date for abstract submission is 1st March 2019\n3. Abstract must contain list of components required.Components will be provided by us.',
      eventTime:'12 March 2019 ,11 a.m.-1 a.m.'},
      {eventName: 'Simulate', eventMembers: 1, eventImg: '../assets/simulate.jpg',
      eventText: `Based on concept of MATLAB.\nThe team participating must know how to use MATLAB and should be able to implement the given problem statement.`,
      eventTagline: 'Good design great impact',
       eventRules: '',eventTime:'12 March 2019 ,11 a.m.-1 a.m.'},
      {eventName: 'Tech-dreamers', eventMembers: 6, eventImg: '../assets/tech_dreamers.jpg',
      eventText: `Create a fiction superhero which has feasible powers.\nStudents have to submit an abstract in which they create a superhero which may be capable of pursuing any kind of power that comes to the thoughts of students but the creation must support scientific logics.`,
      eventTagline: 'Give wings to your imagination',
       eventRules: '1.The technology used for creation must not be pre-invented.\n 2.	The abstract must not exceed word limit of 300 words.',eventTime:''},
      {eventName: 'Tricky Circuit' , eventMembers: 2, eventImg: '../assets/tricky_circuits.gif',
      eventText: `Based on electrical and digital electronics.\nSolve the circuit, collect the treasure and complete your task. But be careful, not to juggle and struggle with the loops. The team participating must have basic knowledge of electrical and digital electronics.`,
      eventTagline: 'do you trick the circuit or get tricked by it', eventRules: '1.	Open for ECE, EEE, EIE, MTE',eventTime:' 12 March 2019 ,9 a.m.-11 a.m.'}

    ];





    this.aviation = [
      {eventName: 'Aviatrix', eventMembers: 2, eventImg: '../assets/aviatrix.jpg',
       eventText: `Based on General Knowledge of Aviation and the Aviators.\n\nThe teams have to answer questions based on aviation facts and people related to aviation for moving forward to the second round and for the final round they will be given a task of multitasking in which their knowledge of aviation will be tested again along with some fun.`, 
       eventTagline: 'A woman who has wings to fly', eventRules: '',eventTime:'12 March 2019 ,11 a.m.-1 p.m.'},
      {eventName: 'Navigate the way', eventMembers: 2, eventImg: '../assets/navigate_the_way.jpg',
      eventText: `An event based on Rules and Regulations, Navigation, Technical Knowledge and Meteorology in Aviation.\n\nThe teams have to begin with answering questions based on rules and regulations, navigation, technical and meteorology  in aviation which will be followed by other interesting fun rounds which will enhance their communication skills.`,
      eventTagline: 'Above and Beyond',
      eventRules:'',eventTime:'11 March 2019 ,11 a.m.-1 p.m.'},
      {eventName: 'Sky is the Limit', eventMembers: 6, eventImg: '../assets/Sky_is_the_limit.jpg', 
      eventText: `Abstract on Remedy to aircraft failures.\nThis is a submission event. Team have to submit an abstract on a given topic within 300 words`,
       eventTagline: 'Do you have a role model Aviator?',
        eventRules:'1.The technology that you suggest can be self-invented or any pre-existing one which has acted as a savior any time.',
        eventTime:''}
     
    ];

    this.phychem = [
      {eventName: 'Chemix', eventMembers: 2, eventImg: '../assets/Chemics.jpg',
       eventText: `Based on basic concepts of Chemistry.\n\nThe event is based on the basic chemistry revolvingaround the elements and reaction. The question will consist of common element and reaction of 11th and 12th standard.`, 
       eventTagline: 'Think chemically, answer sensibly!!', eventRules: '',eventTime:'11 March 2019 ,2 p.m.-4 p.m.'},
      {eventName: 'Cube it in the lab', eventMembers: 2, eventImg: '../assets/cube_it_in_the_lab.jpg',
      eventText: `What if a puzzle helps you solve another riddle, in the Physics Laboratory? Event based on basic Physics revolving around lab experiments and formulas of 11th and 12th standard.`,
      eventTagline: 'Solution is not always an answer',
      eventRules:'',eventTime:'12 March 2019 ,11 a.m.-1 p.m.'},
      {eventName: 'Prism of Possibilities', eventMembers: 2, eventImg: '../assets/prism_of_possibilities.jpg', 
      eventText: `A technical quiz based fun event dealing with student’s knowledge on physics.\nThe event is based on the basic physics revolving around laws and real life applications of physics of 11th and 12th standard.`,
       eventTagline: 'turn the glass and break the white light', eventRules:' ',eventTime:'11 March 2019 ,11 a.m.-1 p.m.'}
     
    ];

     this.cs = [
      {eventName: 'DatenBank', eventMembers: 2, eventImg: '../assets/DatenBank.gif',
       eventText: `Zip the Normalized score to make a win before the session expires. Event based to Database.\nThe team should have a basic knowledge of database management system. This event will contain different level of question in each round on the database management system.`, 
       eventTagline: 'Zip it wisely', eventRules: '',eventTime:'11 March 2019 ,11 a.m.-1 p.m.'},
      {eventName: 'Home Alone', eventMembers: 1, eventImg: '../assets/Home_Alone.jpg',
      eventText: `Ever wondered living alone in a house and you don’t have to work even a single task. And the interesting thing is that no one knows that you live there.\nAbstract submission defining the properties in the house in reference to the technical aspects.\n
      In this event the participants have to give an abstract on how they can create a smart home. The home should be designed in such a way that one has to do not a single task and no one knows who live in the house. Keep your identity safe.`,
      eventTagline: 'Everything can be automated, will be automated',
      eventRules:'1.Abstract must contain less than 300 words.',eventTime:''},
      {eventName: 'Intercom', eventMembers: 2, eventImg: '../assets/Intercom.gif', 
      eventText: `An event based on Networking.\nThe team participating should have basic knowledge of networking.  They have to have knowledge about LAN.`,
       eventTagline: 'No excuses, the Network works', eventRules:' ',eventTime:'12 March 2019 ,2 p.m.-4 p.m.'},
       {eventName: 'Neumonics', eventMembers: 1, eventImg: '../assets/Neumonics.gif',
       eventText: `Based on Assembly language programming & Microprocessors and Microcontrollers.\nThe teams have to answer questions based on ALP to move towards the second and then for the final round of the event.`, 
       eventTagline: 'Translators of Humankind', eventRules: '',eventTime:'11 March 2019 ,4 p.m.-5 p.m.'},
      {eventName: 'Pirate the Code', eventMembers: 2, eventImg: '../assets/Pirate_the_code.gif',
      eventText: `Know your analytical and logical skills with a twist of algorithms.\nThe team participating must have basic knowledge of coding languages and algorithms. The team must have command in C/C++/Java.`,
      eventTagline: 'Keep to the Code…',
      eventRules:'',eventTime:'11 March 2019 ,11 a.m.-1 p.m.'},
      {eventName: 'Run to Move', eventMembers: 2, eventImg: '../assets/Run_to_move.gif', 
      eventText: `Imagine a code that is compiled at run time and not before it. Event based on Operating System.\nThe team participating should have basic knowledge of Operating System and the terminologies used.`,
       eventTagline: 'The race needs to be compiled not run', eventRules:' ',eventTime:'11 March 2019 ,2 p.m.-4 p.m.'},
       {eventName: 'Geek-a-thon', eventMembers: 6, eventImg: '../assets/Geek_o_thon.jpg',
       eventText: `The only ammunition you need to take on the coders across the globe is your Coding skill.\nThis event gives a basic idea about the placement drives. There will be four rounds- Aptitude test, Writing test, Technical, Coding.`, 
       eventTagline: 'make yourself stand out', eventRules: '',eventTime:'12 March 2019 ,9 a.m.-11 a.m.'},
      {eventName: 'Toss the Code', eventMembers: 2, eventImg: '../assets/toss_the_code.jpg',
      eventText: `A question can have more than one solution; also an answer can satisfy many queries.\n Event based on Algorithms.\nThe team participating should have basic knowledge of algorithms, time complexity and space complexity.`,
      eventTagline: 'A question can have more than one solution.',
      eventRules:'',eventTime:'12 March 2019 ,9 a.m.-11 a.m.'},
      {eventName: 'Weave a Web', eventMembers: 1, eventImg: '../assets/weave_a_web.jpg', 
      eventText: `An event purely based on HTML, JS, CSS, AJAX.\nThe team participating must have basic knowledge of HTML, JavaScript, C.S.S and AJAX. The team selected further will be asked to create web pages.`,
       eventTagline: 'Your dreams design the Work.', eventRules:' ',eventTime:'11 March 2019 ,2 p.m.-4 p.m.'}
];


this.fun = [
   {eventName: 'Around the Galaxy', eventMembers: 6, eventImg: '../assets/around_the_galaxy.jpg',
    eventText: `Know your Universe.`, 
    eventTagline: 'Nothing happens until something moves', eventRules: '',
    eventTime:'Stage 1: 3 March 2019 ,5:30 p.m. \n Stage 2: 6 March 2019 ,5:30 p.m. \nFinal:12 March 2019 ,3 p.m.-5 p.m.'},
   {eventName: 'The Color Flair', eventMembers: 1, eventImg: '../assets/the_color_flair.jpg',
   eventText: `Show your technicality on canvas.`,
   eventTagline: 'Let us take the “pain” out of painting.',
   eventRules:'1. One must bring their own colors and required things',eventTime:'12 March 2019 ,3 p.m.-5 p.m.'},
   {eventName: 'Combatant 2.0', eventMembers: 1, eventImg: '../assets/combatant.jpg', 
   eventText: `Questionnare and personal interview\n NOTE: Collect the form after team registration (if interested).`,
    eventTagline: 'It’s hard to beat a person who never gives up', eventRules:' ',
    eventTime:'Prelim : 7 March 2019 ,5:30 p.m. \nFinal:11 March 2019 ,3 p.m.-5 p.m.'},
    {eventName: 'Enclaved', eventMembers: 1, eventImg: '../assets/enclaved.jpg',
    eventText: `Group Discussion.\n students will be tested on their oratory and convincing skills.`, 
    eventTagline: 'prove your point with soft words but harsh arguments', eventRules: '',
    eventTime:'Prelim : 5 March 2019 ,5:00 p.m. \nFinal:10 March 2019 ,9 a.m.-11 a.m.'},

   {eventName: 'Girl in the city', eventMembers: 1, eventImg: '../assets/girl_in_the_city.jpg',
   eventText: `Because we don’t believe in designing clothes, we believe in designing dreams.\n\nParticipants are required to submit a complete portfolio including a brand name, a theme for the cloth/ designs collection, a brand logo, an abstract and a collection of 10-12 dress designs. `,
   eventTagline: 'Let thy creations rule this time…',
   eventRules:'',eventTime:''},
   {eventName: 'How’s the Josh!!', eventMembers: 1, eventImg: '../assets/how_the_josh.jpg', 
   eventText: `Fun event based on general awareness of defense, creativity and physical strength`,
    eventTagline: 'Join to say “High Sir”', eventRules:' ',eventTime:'12 March 2019 ,3 p.m.-5 p.m.'},
    {eventName: 'Legal Enigma', eventMembers: 6, eventImg: '../assets/legal_enigma.jpg',
    eventText: `Are you an investigator or lawyer?So let’s combine both to solve this unpredictable case with a little drama and technical twist.`, 
    eventTagline: 'The moral arc of the universe bends at the elbow of justice', eventRules: '',
    eventTime:'Stage 1: 2 March 2019 ,5:30 p.m. \n Stage 2: 4 March 2019 ,2:00 p.m. \nFinal:12 March 2019 ,11 a.m.-1 p.m.'},
   {eventName: 'Mayukh’s Got Talent', eventMembers: 6, eventImg: '../assets/mayukh_got_talent.jpg',
   eventText: `Talents don’t really fit into frames!  So here we give you a stage to showcase your talents. Every talent accepted except dance and drama.`,
   eventTagline: 'So you think, you have it in you?',
   eventRules:'',eventTime:'Prelim : 5 March 2019 ,2:00 p.m. \nFinal:9 March 2019 ,5:30 p.m.'},
   {eventName: 'Mythography', eventMembers: 6, eventImg: '../assets/mythography.jpg', 
   eventText: `If you are a religious geek and dream for God to land on Earth, give your imagination a blissful platform.\n\nComprises of Video submission (3-5 min).`,
    eventTagline: 'tell your own story of God', eventRules:' ',eventTime:'11 March 2019 ,4 p.m.-5 p.m.'},
    {eventName: 'Parnassus', eventMembers: 1, eventImg: '../assets/parnassus.jpg',
    eventText: `English Literature freaks with exuberant poetic talent are invited to play and create a magic of their rhythmic words in the atmosphere.`, 
    eventTagline: 'the rhythmic breeze', eventRules: '',eventTime:'12 March 2019 ,2 p.m.-4 p.m.'},
   {eventName: 'Prashnotri', eventMembers: 2, eventImg: '../assets/prashnotri.jpg',
   eventText: `An event based on general awareness.`,
   eventTagline: 'we came, we quizzed, we conquered',
   eventRules:'',eventTime:'12 March 2019 ,11 a.m.-1 p.m.'},
   {eventName: 'Saakshya', eventMembers: 1, eventImg: '../assets/saakshya.jpg', 
   eventText: `A video without a storyboard is like a house without a foundation.\nStudents have to submit a video documentary related to MAYUKH theme ‘INVICTUS’.`,
    eventTagline: 'In the middle of nowhere', eventRules:' ',eventTime:''},
    {eventName: 'Vend-e-Roots', eventMembers: 1, eventImg: '../assets/vend_roots.jpg',
    eventText: `This event will enhance the marketing skills of an individual.\n Consist of Abstract submission on the sale promotion strategies of rural goods.`, 
    eventTagline: 'It starts with us', eventRules: '',eventTime:'11 March 2019 ,4 p.m.-5 p.m.'},
   {eventName: 'Gaming League 3.0', eventMembers: 1, eventImg: '../assets/gaming_league.jpg',
   eventText: `Games are the virtual concept that can bring your fantasies to life`,
   eventTagline: 'A GAMER has many lives but not always…',
   eventRules:'',eventTime:' 12 March 2019 ,2 p.m.-4 p.m.'},
   {eventName: 'Kavya-Rang', eventMembers: 2, eventImg: '../assets/kavya_rang.jpg', 
   eventText: `An event to test the extent and intensity of the poet or a literary buff in you`,
    eventTagline: 'shabdon ke bhanvar me', eventRules:' ',eventTime:'11 March 2019 ,2 p.m.-4 p.m.'}
  
];




  }


  TakeTo()
  {

    const modal = this.modalCtrl.create('SchedulePage');
    modal.present();


  }
  
  
  
  ionViewDidLoad() {

    //console.log('ionViewDidLoad EventsPage',this.angularFireAuth.auth.currentUser);

    if(this.angularFireAuth.auth.currentUser)
    {

      this.isRegistered=true;
      this.ref = firebase.database().ref('Teams/'+this.angularFireAuth.auth.currentUser.uid);
      this.ref.on('value', resp => {

        this.returnArr = [];
       // console.log('s ',resp);
        resp.forEach(snap => {
         // console.log('gigh ',snap.val());
          this.returnArr.push(snap.val());
          return false;
        });  

      //  console.log('regist',this.returnArr);
        
        this.teamname=this.returnArr.pop();
        this.teampass=this.returnArr.pop();
        this.teamPaid=this.returnArr.pop();
        this.teamcollege=this.returnArr.pop();
        
        
        
        

        // console.log('Name',this.teamname);
        // console.log('pass',this.teampass);
        // console.log('college',this.teamcollege);
        // console.log(this.teamname,this.returnArr);
        
      });


    }
    else
    {
        this.isRegistered=false;
        this.returnArr=[];
        this.teamname="";

    }
    
  }

  scrollTo(elementId: string) {
    let y = document.getElementById(elementId).offsetTop;
    this.content.scrollTo(0, y);
    this.w3_close();
  }


  clickedMaths(idx)
  {
    //console.log(this.isRegistered+"register");
    const modal = this.modalCtrl.create('EventDetailsPage',{

      Name:this.maths[idx].eventName,
      Tagline:this.maths[idx].eventTagline,
      DateTime:this.maths[idx].eventTime,
      Text:this.maths[idx].eventText,
      Rules:this.maths[idx].eventRules,
      Image:this.maths[idx].eventImg,
      Teamsize:this.maths[idx].eventMembers,
      Registered:this.isRegistered,
      TeamMembers:this.returnArr,
      TeamName:this.teamname,
      Paid:this.teamPaid

     });
    modal.present();
     
  } 

  clickedAviation(idx)
  {
   
    const modal = this.modalCtrl.create('EventDetailsPage',{
      Name:this.aviation[idx].eventName,
      Tagline:this.aviation[idx].eventTagline,
      DateTime:this.aviation[idx].eventTime,
      Text:this.aviation[idx].eventText,
      Rules:this.aviation[idx].eventRules,
      Image:this.aviation[idx].eventImg,
      Teamsize:this.aviation[idx].eventMembers,
      Registered:this.isRegistered,
      TeamMembers:this.returnArr,
      TeamName:this.teamname,
      Paid:this.teamPaid
    });
    modal.present();
     
  } 

  clickedElectronics(idx)
  {
    
    const modal = this.modalCtrl.create('EventDetailsPage',{
      Name:this.electronics[idx].eventName,
      Tagline:this.electronics[idx].eventTagline,
      DateTime:this.electronics[idx].eventTime,
      Text:this.electronics[idx].eventText,
      Rules:this.electronics[idx].eventRules,
      Image:this.electronics[idx].eventImg,
      Teamsize:this.electronics[idx].eventMembers,
      Registered:this.isRegistered,
      TeamMembers:this.returnArr,
      TeamName:this.teamname,
      Paid:this.teamPaid
    });
    modal.present();
     
  } 


  clickedCs(idx)
  {
    
    const modal = this.modalCtrl.create('EventDetailsPage',{
      Name:this.cs[idx].eventName,
      Tagline:this.cs[idx].eventTagline,
      DateTime:this.cs[idx].eventTime,
      Text:this.cs[idx].eventText,
      Rules:this.cs[idx].eventRules,
      Image:this.cs[idx].eventImg,
      Teamsize:this.cs[idx].eventMembers,
      Registered:this.isRegistered,
      TeamMembers:this.returnArr,
      TeamName:this.teamname,
      Paid:this.teamPaid
    });
    modal.present();
     
  } 

  clickedFun(idx)
  {
    
    const modal = this.modalCtrl.create('EventDetailsPage',{

      Name:this.fun[idx].eventName,
      Tagline:this.fun[idx].eventTagline,
      DateTime:this.fun[idx].eventTime,
      Text:this.fun[idx].eventText,
      Rules:this.fun[idx].eventRules,
      Image:this.fun[idx].eventImg,
      Teamsize:this.fun[idx].eventMembers,
      Registered:this.isRegistered,
      TeamMembers:this.returnArr,
      TeamName:this.teamname,
      Paid:this.teamPaid

    });
    modal.present();
     
  } 


  clickedPhy(idx)
  {
    
    const modal = this.modalCtrl.create('EventDetailsPage',{

      Name:this.phychem[idx].eventName,
      Tagline:this.phychem[idx].eventTagline,
      DateTime:this.phychem[idx].eventTime,
      Text:this.phychem[idx].eventText,
      Rules:this.phychem[idx].eventRules,
      Image:this.phychem[idx].eventImg,
      Teamsize:this.phychem[idx].eventMembers,
      Registered:this.isRegistered,
      TeamMembers:this.returnArr,
      TeamName:this.teamname,
      Paid:this.teamPaid

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
