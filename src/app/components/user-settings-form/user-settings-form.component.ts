import { Component, OnInit } from '@angular/core';
import { IUserSettings } from 'src/app/Interfaces/IUserSettings';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  userSetting: IUserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  }

  constructor(private data: DataService) { }

  ngOnInit() {
  }
  
  //https://putsreq.com
  onSubmit(form: NgForm): void {
    console.log(form.valid);
    this.data.postUserSettingsForm(this.userSetting).subscribe(
      result => console.log('success: ' , result),
      error => console.log('Error ', error)
    );
  }

}
