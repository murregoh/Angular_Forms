import { Injectable } from '@angular/core';
import { IUserSettings } from '../Interfaces/IUserSettings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: IUserSettings): Observable<any> {
    return this.http.post('https://putsreq.com/CW82CzQg9ijF6AMtDWTs', userSettings);
  }
}
