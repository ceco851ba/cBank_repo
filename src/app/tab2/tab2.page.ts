import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../user';
import { Storage } from '@ionic/storage';
import { MyTransaction } from '../my-transaction';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  TransactionsList : MyTransaction[] = new Array ();
  profile:User = new User();

  constructor(private storage: Storage, private navController: NavController) {

    this.storage.get('user').then((val) => {
        this.profile = JSON.parse(val);  
    });

    this.storage.get('transactions').then((val) => {
      this.TransactionsList = JSON.parse(val);
      this.TransactionsList.forEach(transaction => {
        if  (transaction.recieverId !== this.profile.userId && transaction.senderId !== this.profile.userId){
          this.TransactionsList.splice(transaction.transactionId, 1);
        }
      });
      });
  }

  returnToProfileButtonOnclick(){
    this.navController.navigateRoot("tabs/tab1");
  }

  gotoNewTransaction(){

  this.navController.navigateRoot("tabs/tab3");
}
  
  ionViewDidEnter() {
    this.refreshOnClick();
  }


  refreshOnClick(){
     this.storage.get('user').then((val) => {
        this.profile = JSON.parse(val);  
    });
    this.storage.get('transactions').then((val) => {
      this.TransactionsList = JSON.parse(val);

      this.TransactionsList.forEach(transaction => {
        if  (transaction.recieverId !== this.profile.userId && transaction.senderId !== this.profile.userId){
          this.TransactionsList.splice(transaction.transactionId, 1);
        }
      });
    });
  }

  transactionDetailClick(inTransaction: MyTransaction){
    console.log(inTransaction);
    this.storage.set("selected-transaction", JSON.stringify(inTransaction));
   this.navController.navigateRoot("transaction-details-page");
  }

  




  
}
