import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';

/**
 * Generated class for the TeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class team
{
  
  memberName:string;
  memberImg:string;
  
};

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {

  decor: team[];
  webapp: team[];
  cultural: team[];
  tech: team[];
  cater: team[];
  sponsor: team[];
  account: team[];
  register: team[];
  digital: team[];
  cover: team[];
  workshop: team[];

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.decor = [
      {memberName: "Rakhi Mathur", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Decor%2FRakhi_mathur.jpg?alt=media&token=52444e41-cc76-4c8b-95ab-971983cdfd78" },
      {memberName: "Akshita Mathur", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Decor%2FAkshita_mathur.jpg?alt=media&token=f70f2221-4253-4e17-b197-60072db31c4b" },
      {memberName: "Dristi Agarwal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Decor%2FDristi_agarwal.jpg?alt=media&token=819842a7-cfea-4433-92af-7803d9fafb9e" },
      {memberName: "Garima", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Decor%2Fgarima.jpg?alt=media&token=7f476b76-e6f7-405f-b9f1-b3922d07492b" },
      {memberName: "Himani Chahar", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Decor%2Fhimani_chahar.jpg?alt=media&token=9947c44f-20e4-40b1-a53b-5d228562cbee" },
      {memberName: "Saloni Prajapati", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Decor%2Fsaloni_prajapati.jpg?alt=media&token=88b148c4-d9bf-440e-b5ff-f5e4b10de307" },
      {memberName: "Shreya Jain", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Decor%2FShreya_jain.jpg?alt=media&token=6e2b7110-1d33-4d0c-a4ff-6dbee5dc0442" },
      {memberName: "Shruti Singh Parihar", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Decor%2Fshruti_singh_parihar.jpg?alt=media&token=2f4a4412-6b35-4db1-a922-9740aa40a636" },
      {memberName: "Yogita Agrawal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Decor%2Fyogita_agrawal.jpg?alt=media&token=ca088590-f110-4ebd-9764-e8e4f57447ed" },
      {memberName: "Nivriti Verma", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Decor%2FNivriti_verma.jpg?alt=media&token=28535757-376c-4a00-8e2e-22920e1cf057" }
      
      
    ];

    this.webapp = [
      {memberName: "Vibhuti Rajpal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/WebApp%2Fvibhuti.png?alt=media&token=92a7647b-b033-4e69-bd67-dcb44c45abaf" },
      {memberName: "Swati Chopra", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/WebApp%2FSwati_Chopra1.png?alt=media&token=c3ee02d2-dab4-4404-b3cb-50081e323b73" },
      {memberName: "Apoorva Gupta", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/WebApp%2Fapoorvagupta.jpg?alt=media&token=66de1ddd-5d21-4731-beaa-c18223477444" },
      {memberName: "Samiksha Sharma", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/WebApp%2FSamiksha.jpg?alt=media&token=0f5692d5-b736-457a-a359-298ae31345f9" },
      {memberName: "Manupriya", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/WebApp%2Fmanupriya.jpg?alt=media&token=edb6fbbe-6f1f-4071-96be-786fdb30932b" },
      {memberName: "Maya Nagar", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/WebApp%2Fmayanagar.jpg?alt=media&token=13dccd6e-8020-4830-ba3d-a91c660c48c8" }
      
    ];

    this.tech = [
      {memberName: "Smriti Agarwal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FSmritiAgarwal.jpg?alt=media&token=a73b3df9-3099-4b0b-8191-f412b37f55d6" },
      {memberName: "Rishika Suri", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FRishikaSuri.jpg?alt=media&token=940348e0-91a4-4aa5-8dfc-9fc7c356a143" },
      {memberName: "Tanya Jain", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FTanyaJain.JPG?alt=media&token=141234c1-05a8-41e7-b03d-3410fa74f411" },
      {memberName: "Kirti Rohilla", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FKirtiRohilla.png?alt=media&token=eed9d69e-c640-4030-b8c3-c4eb4bef9cf5" },
      {memberName: "Aarti Chouhan", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FAartiChouhan.JPG?alt=media&token=0945c0ed-f41d-475e-871d-595f1c75d95a" },
      {memberName: "Anshu Kant", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FAnshuKant.jpg?alt=media&token=e79ad093-e211-4175-b007-1fb37a4de543" },
      {memberName: "Anupriya", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FAnupriya.JPG?alt=media&token=22152c5c-a35b-4ab7-b55f-d7189bf61ee2" },
      {memberName: "Balpreet Kaur", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FBalpreetKaur.JPG?alt=media&token=8d4e1dc8-dce3-481b-8950-801908e3ca5e" },
      {memberName: "Komal Pareek", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FKomalPareek.jpg?alt=media&token=28493332-ff9c-4ef4-8e77-0fe4dcefaf95" },
      {memberName: "Rituparna Singh", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FRituparnaSingh.jpg?alt=media&token=b51b3866-12ba-42c4-b67f-9e5993c4dcaf" },
      {memberName: "Shefali Bansal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FShefaliBansal.jpg?alt=media&token=25baf7ed-33b2-4bb5-b9bb-c3f15268189b" },
      {memberName: "Shivangi Adlakha", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FShivangiAdlakha.JPG?alt=media&token=b3214c16-3936-46f7-ab72-be6f57b9d297" },
      {memberName: "Shivangi Gupta", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FShivangiGupta.jpg?alt=media&token=28807556-2854-4afe-900e-99ae916ba704" },
      {memberName: "Shivangi Pandey", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FShivangiPandey.jpg?alt=media&token=c36c2a8f-4dbf-422d-a56f-9c98b485308b" },
      {memberName: "Shubhi Agarwal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FShubhiAgarwal.png?alt=media&token=233bac17-202a-45ae-a68a-2f4b6575f92d" },
      {memberName: "Shubhi Jain", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FShubhiJain.jpg?alt=media&token=c10bed97-68f7-454f-8514-374596693012" },
      {memberName: "Simran Arora", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Tech%2FSimranArora.jpeg?alt=media&token=bd04cc59-841e-42d6-9492-e0d3da241218" },
      
    ];

    this.cultural = [
      {memberName: "Ananaya Sundriyal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FANANYASUNDRIYAL.jpeg?alt=media&token=96d7a858-4ab0-4825-9449-dbbbbbf3b989" },
      {memberName: "Anushka Sharma", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FAnushkaSharma.jpeg?alt=media&token=02656dbe-a5e0-4094-87cf-f42c9d33fa30" },
      {memberName: "Aparajita Tripathi", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FAparajitaTripathi.jpeg?alt=media&token=7ab6a8c5-39e6-4b5e-a762-386b51da5fc1" },
      {memberName: "Chandrika Patwal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FCHANDRIKAPATWAL.jpeg?alt=media&token=aa6e4acd-4837-4d41-b917-b1e7a8801d72" },
      {memberName: "Dixita Yadav", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FDIXITAYADAV.jpeg?alt=media&token=da044c97-7888-4cc6-a087-df579a05c01f" },
      {memberName: "Kanupriya Gupta", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FKANUPRIYAGUPTA.jpeg?alt=media&token=c96ff56a-c68f-4868-970d-71c5f92714bb" },
      {memberName: "Mansi Jain", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FMANSIJAIN.jpeg?alt=media&token=b00a919e-dfdc-4622-8a2f-b4b59c7526e9" },
      {memberName: "Nidhi Sharma", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FNIDHISHARMA.jpeg?alt=media&token=4be64c12-54b8-454e-ba36-6a51af9ecf56"},
      {memberName: "Parul", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FPARUL.jpeg?alt=media&token=6ac7363b-c503-4971-abd1-2a882081385f" },
      {memberName: "Rashmi Raj", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FRASHMIRAJ.jpeg?alt=media&token=8d9cb9ce-3788-4288-b907-a9e6b3725eed" },
      {memberName: "Sanjeevni Rastogi", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FSANJEEVNIRASTOGI.jpeg?alt=media&token=55ed7faa-3734-471d-880b-2cfb10299e75" },
      {memberName: "Shivangi Sharma", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FSHIVANGISHARMA.jpeg?alt=media&token=04329c17-8832-4ab7-8a94-0e3b79acc80c" },
      {memberName: "Shrishti Baura", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FSHRISHTIBAURA.jpeg?alt=media&token=0995188d-7876-41a6-802d-a7428e5f729e" },
      {memberName: "Shriya Mehta", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FSHRIYAMEHTA.jpeg?alt=media&token=6e232107-a506-4745-871f-5cc1d697fa85" },
      {memberName: "Shubhi Tiwari", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FSHUBHITIWARI.jpeg?alt=media&token=f14f2ae1-a588-441d-ad36-958b8e5cb579" },
      {memberName: "Sonal Shukla", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FSONALSHUKLA.jpeg?alt=media&token=bad0a9df-ff81-4e86-8a1a-021fbfd672b1" },
      {memberName: "Tanveen Kaur", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FTANVEENKAUR.jpeg?alt=media&token=214b009e-d13a-4f4d-ba3c-6dea97233cf0" },
      {memberName: "Urvi Kashakya", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FURVIKASHAKYA.jpeg?alt=media&token=91f40886-f739-409c-bb56-fd70f9428630" },
      {memberName: "Vibha Trivedi", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Cultural%2FVIBHATRIVEDI.jpeg?alt=media&token=74477298-cbc9-4258-abc5-bdf5ac9fba73" }
      
    ];

    this.sponsor = [
      {memberName: "Mansi Joshi", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Sponsership%2FMansi_Joshi.jpg?alt=media&token=d1087a40-103a-45aa-973b-48e547d05f92"},
      {memberName: "Anshika Goel", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Sponsership%2FAnshika_Goel.jpg?alt=media&token=3232765c-9b94-4320-a255-1dc875ab3ebe"},
      {memberName: "Varnika Tyagi", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Sponsership%2FVarnika_Tyagi.jpg?alt=media&token=7edd8457-1eec-45e7-8f00-bafe61f8dd64" },
      {memberName: "Rakshita Sharma", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Sponsership%2FRakshita_Sharma.jpg?alt=media&token=ebad2fa8-5985-4024-9d61-a6ee7d55222c" },
      {memberName: "Shikha Saun", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Sponsership%2FShikha_Saun.jpg?alt=media&token=abc09da3-40a2-45cf-800c-cec6c73c4ae5", }
      
    ];

    this.cover = [
      {memberName: "Shreya Garg", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Coverage%2FShreyagarg.jpg?alt=media&token=18ef8a3d-bcae-4029-9049-b2fd5ffe3dcf" },
      {memberName: "Akansha Rajput", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Coverage%2FAkansharajput.jpg?alt=media&token=79553d48-25e7-4980-8de6-9812bd460e2f" },
      {memberName: "Anamika", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Coverage%2FAnamika.jpg?alt=media&token=a9a082a4-7e89-48cf-9190-684dac422e6d" },
      {memberName: "Rizu Gupta", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Coverage%2FRizugupta.jpg?alt=media&token=f8cca758-af21-4ea7-b9c7-ba59778bc5d6" },
      {memberName: "Nikita Rawat", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Coverage%2FNikitarawat.jpg?alt=media&token=66b4a81a-697f-4713-9447-96f923edec4d" },
      {memberName: "Rayshi Sood", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Coverage%2FRayshisood.jpg?alt=media&token=721af707-1819-48c2-94f3-18ad499683e3" },
      {memberName: "Shivanshi Gandhi", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Coverage%2FShivanshigandhi.jpg?alt=media&token=02e33a05-0835-4d99-a17a-c4bbed137bcb" },
      {memberName: "Shivangi", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Coverage%2FShivangi.jpg?alt=media&token=32b4c850-2dbd-4a8d-8b05-db821a08cc7e" },
      {memberName: "Neha Purohit", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Coverage%2FNehapurohit.jpg?alt=media&token=f7ff278a-56c9-40ae-bc1f-98719dd625a7" },
      {memberName: "Sakshi Sharma", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Coverage%2FSakshisharma.jpg?alt=media&token=25bd9971-e090-49ec-ade6-02060cf9aaf8" },
      {memberName: "Aastha Tripathi", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Coverage%2FAasthatripathi.jpg?alt=media&token=3bbc7daf-7602-4764-a477-1da99f14ba19" },
      
    ];

    this.cater = [
      {memberName: "Ananya agarwal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Catering%2FANANYAAGARWAL.jpg?alt=media&token=14527f7d-6e17-4196-9d11-aa039809cfd9" },
      {memberName: "Ayushi Agrawal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Catering%2FAYUSHIAGRAWAL.jpg?alt=media&token=232a3511-bf2a-41cf-9060-99c2437b011c" },
      {memberName: "Ayushi Dobriyal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Catering%2FAYUSHIDOBRIYAL.jpg?alt=media&token=e92dcc95-ed91-40d6-88b5-4709ac359f95" },
      {memberName: "Isha Garg", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Catering%2FISHAGARG.jpg?alt=media&token=acefcfef-288e-4a17-bd47-096da427c22f" },
      {memberName: "Kajal Jain", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Catering%2FKAJALJAIN.jpg?alt=media&token=f5e5c65a-c981-4275-8839-56cce98c2cab" },
      {memberName: "Khyati Jaiswal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Catering%2FKHYATIJAISWAL.jpg?alt=media&token=f93ad71f-e3f3-4540-9d9d-27e9f1406d11" },
      {memberName: "Kratika Pareek", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Catering%2FKRATIKAPAREEK.jpg?alt=media&token=8b498821-05cc-4988-8600-cb65b95bf518" },
      {memberName: "Mahek Chugh", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Catering%2FMAHEKCHUGH.jpg?alt=media&token=86b4fdbb-59e4-4d12-8ba7-a69015b9397c" },
      {memberName: "Mahima Singhal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Catering%2FMAHIMASINGHAL.jpg?alt=media&token=3256c70a-db5e-4ee5-96ed-507d440347c1" },
      {memberName: "Nimisha Ghanshani", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Catering%2FNIMISHAGHANSHANI.jpg?alt=media&token=9dc97078-1eaa-4af7-a5d1-58831f33bd76" },
      {memberName: "Pankhuri Tiwary", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Catering%2FPANKHURITIWARY.jpg?alt=media&token=d5169931-a0b9-44fd-939f-cc5feb3a35ae" },
      {memberName: "Prachi Gupta", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Catering%2FPRACHIGUPTA.jpg?alt=media&token=e0076835-08bc-4fbd-8c5f-7b3590cc1d49" },
      {memberName: "Pragya Sinha", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Catering%2FPRAGYASINHA.jpg?alt=media&token=75489188-eec4-4f34-a8ed-db85033e098a" },
      {memberName: "Priya Garg", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Catering%2FPRIYAGARG.jpg?alt=media&token=a9a731d0-0c0c-42ea-8319-b737d2c84621" },
      {memberName: "Shikha Badhana", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Catering%2FSHIKHABADHANA.jpg?alt=media&token=b8df7daa-1352-495e-9b61-4a5e384f5d1b" }
      
    ];

    this.register = [
          {memberName: "Anoosha Sharma", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Registration%2FAnooshaSharma.jpg?alt=media&token=ab9b3375-8d8b-4713-b126-26430bb50268" },
         {memberName: "Anushka Tiwari", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Registration%2FAnushkaTiwari.jpg?alt=media&token=44779752-296f-49b4-b9a3-1e3a67e5dd2e" },
         {memberName: "Ashima Gupta", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Registration%2FAshimaGupta.jpg?alt=media&token=bbb9e745-bbf3-4c21-91c8-bafd9a60ff9d" },
         {memberName: "Chitvan Mishra", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Registration%2FChitvanMishra.jpg?alt=media&token=97d87dc3-883c-4206-950d-eebf577708e6" },
         {memberName: "Medhya Tripathi", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Registration%2FMedhya%20Tripathi.jpg?alt=media&token=a5bee019-24a4-4357-8a5f-c5980f5cd676" },
         {memberName: "Priyanka Bansal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Registration%2FPriyankaBansak.jpg?alt=media&token=8e152ed6-7919-4d4d-8bcf-fa7704d49dc5" },
         {memberName: "Shefali Gupta", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Registration%2FShefaliGupta.JPG?alt=media&token=c473b74a-e185-4727-a5b0-ab8661a87ae5" },
         {memberName: "Shelja Lomash", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Registration%2FSheljaLomash.jpg?alt=media&token=2adf93fb-4a3d-4bb5-ab2e-717e31616c74" },
         {memberName: "Tanya Agarwal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Registration%2FTanyaAgarwal.jpg?alt=media&token=5608e894-e85e-4def-8c07-a23cf4f89714" },
         {memberName: "Apoorva Sharma", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Registration%2FApoorvaSharma.jpg?alt=media&token=d3c4df71-a714-437c-aaaa-0e19d939633b" }
      
      
    ];

    this.account = [
      {memberName: "Annu Kedia", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Accounts%2FAnnukedia.jpg?alt=media&token=782d8c99-17cc-4eac-b409-a6b66ff18ac5" },
      {memberName: "Kaushik Singh", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Accounts%2FKaushiksingh.jpg?alt=media&token=c9f491d6-bea1-489b-9e95-874e5f2e5703" },
      {memberName: "Meemansa", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Accounts%2FMeemansa.jpg?alt=media&token=e6160f84-f837-4110-b346-4c57ec4506a6" }  
    ];

    this.digital = [
      {memberName: "Lavanya Parakh", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Digital%20Design%2FLavanyaParakh.jpg?alt=media&token=c826171f-bb28-4676-b6c2-841d9933f0fe" },
      {memberName: "Shatakshi Sharma", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Digital%20Design%2FShatakshiSharma.JPG?alt=media&token=3d7438b4-4921-4786-bff5-67767b5661db" },
      {memberName: "Snigdha", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Digital%20Design%2FSnigdha.jpg?alt=media&token=c38e516e-e588-484b-a4b3-3929b80de30a" }
      
    ];

    this.workshop = [
      {memberName: "Shivi Mangal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Workshop%2FShiviMangal.jpg?alt=media&token=0fd87927-8c95-4817-88b7-d19fec09ea44" },
      {memberName: "Ananya Tripathi", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Workshop%2FAnanyaTripathi.jpg?alt=media&token=c521ac03-d873-4217-93bc-9cbc0819dfbe" },
      {memberName: "Anjali Verma", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Workshop%2FAnjaliVerma.jpg?alt=media&token=b9f8bfe4-3a68-49e0-9efd-c90386f41682" },
      {memberName: "Archita Ohri", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Workshop%2FArchitaOhri.jpg?alt=media&token=c82d6a88-9058-4d18-997f-11f2fea76d95" },
      {memberName: "Ayushi Bakshi", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Workshop%2FAyushiBakshi.jpg?alt=media&token=e4551e18-3f18-4381-a9f7-f607e7af28c9" },
      {memberName: "Meghana Agnihotri", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Workshop%2FMeghanaAgnihotri.png?alt=media&token=9fa4e367-9c6a-47f9-b4a7-a9ed0adfdd2c" },
      {memberName: "Priyanka Munjal", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Workshop%2FPriyankaMunjal.jpg?alt=media&token=bbaad5b9-65d3-4276-aba3-44a70ccffe54" },
      {memberName: "Sakshi Gupta", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Workshop%2FSakshiGupta.jpg?alt=media&token=430357ff-cd9a-43f3-9dc9-dbc092fbdadc" },
      {memberName: "Sneha Vardhan", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Workshop%2FSnehaVardhan.jpg?alt=media&token=30490816-2fac-4a34-a4ec-19b7077ee4e1" },
      {memberName: "Soumya Verma", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Workshop%2FSoumyaVerma.jpg?alt=media&token=85df1324-b5e1-4508-903c-d6721ac5c709" },
      {memberName: "Tanushka Upadhyay", memberImg: "https://firebasestorage.googleapis.com/v0/b/mayukh-19.appspot.com/o/Workshop%2FTanushkaUpadhyay.jpg?alt=media&token=c6ea0b8e-2a17-4043-8fc2-698e7187f0f6" }
      
      
    ];
  



  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad TeamPage');
  }


  scrollTo(elementId: string) {
    let y = document.getElementById(elementId).offsetTop;
    this.content.scrollTo(0, y);
    this.w3_close();
  }

  w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }

}
