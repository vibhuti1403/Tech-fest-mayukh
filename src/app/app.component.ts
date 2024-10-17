import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { rootRenderNodes } from '@angular/core/src/view';

import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any =HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private angularFireAuth: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

