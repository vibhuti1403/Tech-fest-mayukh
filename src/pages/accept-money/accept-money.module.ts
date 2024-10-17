import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceptMoneyPage } from './accept-money';

@NgModule({
  declarations: [
    AcceptMoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(AcceptMoneyPage),
  ],
})
export class AcceptMoneyPageModule {}
