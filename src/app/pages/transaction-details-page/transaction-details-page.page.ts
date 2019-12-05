import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MyTransaction } from '../../my-transaction';

@Component({
  selector: 'app-transaction-details-page',
  templateUrl: './transaction-details-page.page.html',
  styleUrls: ['./transaction-details-page.page.scss'],
})
export class TransactionDetailsPagePage implements OnInit {
 
  SelectedTransaction: MyTransaction;
  dateAndTime:string;

  constructor(private storage: Storage, private navController: NavController) {
    this.refresh();
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.refresh();
  }

  async refresh(){
    await this.storage.get("selected-transaction").then((val) => {
      this.SelectedTransaction = JSON.parse(val);
      this.dateAndTime = new Date(this.SelectedTransaction.transactionTimestamp).toString();
      console.log(this.SelectedTransaction);
    });
  }


  returnToTransactionButtonOnclick(){
    this.navController.navigateRoot("tabs/tab2");
  }
}
