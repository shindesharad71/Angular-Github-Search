import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  users: any;
  selectInput: any;

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  private sortSource = new BehaviorSubject('login');
  sortMessage = this.sortSource.asObservable();

  constructor(private http: HttpClient) { }

  searchUsers(term) {
    if (term.length > 3) {
      this.http.get('https://api.github.com/search/users?q=' + term).subscribe(data => {
        this.users = data;
        this.messageSource.next(this.users);
      });
    }
  }

  selectInputData(input) {
    switch (input) {
      case 'nameaz':
        console.log('nameaz');
        this.sortSource.next('user.login : true : true');
        break;
      case 'nameza':
        console.log('nameza');
        this.sortSource.next('user.login : false : true');
        break;
      case 'rankup':
        console.log('rankup');

        this.sortSource.next('user.id : true : true');
        break;
      case 'rankdown':
        console.log('rankdown');
        this.sortSource.next('user.id : false: true');
        break;
      default:
        console.log('default');
        this.sortSource.next('login');
    }
  }

  usersList() {
    return this.users;
  }

}
