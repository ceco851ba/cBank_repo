import { Component } from '@angular/core';
import { User } from '../user';
import { ProfileEditPageModule } from '../pages/profile-edit/profile-edit.module';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DataStorageService } from '../services/data-storage.service';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  profile:User = new User();
  constructor(private storage: Storage, private navController: NavController) {
    storage.get('user').then((val) => {
      this.profile = JSON.parse(val); }
      );
  }

  usrEditButtonOnClick() {
    this.navController.navigateRoot("profile-edit");
  }
  gotoTransButtonOnclick(){
    this.navController.navigateRoot("tabs/tab2");
  }

  gotoNewTransButtonOnclick(){
    this.navController.navigateRoot("tabs/tab3");
  }
  ionViewDidEnter() {
    this.refreshOnClick();
  }
  refreshOnClick(){
    this.storage.get('user').then((val) => {
      this.profile = JSON.parse(val); }
      );
  }

}
