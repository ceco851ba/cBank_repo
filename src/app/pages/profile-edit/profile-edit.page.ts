import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { User } from '../../user';
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {

  profile: User = new User();
  constructor(private storage: Storage, private navController: NavController) {}

ngOnInit() {
      this.storage.get('user').then((val) => {
      this.profile = JSON.parse(val); }
      );
  }
  
  saveValuesButtonOnclick() {
    console.log(this.profile.userName);
    this.storage.set("user", JSON.stringify(this.profile));
  }
  returnToProfileButtonOnclick(){
    this.navController.navigateRoot("tabs/tab1");
  }
}
