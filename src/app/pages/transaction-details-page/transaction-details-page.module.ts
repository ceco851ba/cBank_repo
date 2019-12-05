import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionDetailsPagePageRoutingModule } from './transaction-details-page-routing.module';

import { TransactionDetailsPagePage } from './transaction-details-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionDetailsPagePageRoutingModule
  ],
  declarations: [TransactionDetailsPagePage]
})
export class TransactionDetailsPagePageModule {}
