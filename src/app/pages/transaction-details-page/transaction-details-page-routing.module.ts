import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionDetailsPagePage } from './transaction-details-page.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionDetailsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionDetailsPagePageRoutingModule {}
