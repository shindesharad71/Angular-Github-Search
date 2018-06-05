import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  users: any;
  selectInput: any;

  private messageSource = new BehaviorSubject('initial');
  currentMessage = this.messageSource.asObservable();

  private sortSource = new BehaviorSubject('login');
  sortMessage = this.sortSource.asObservable();

  constructor(private http: HttpClient) { }

  searchUsers(term) {
    if (term.length > 3) {
      this.http.get('https://api.github.com/search/users?q=' + term).subscribe(data => {
        this.users = data;
        this.messageSource.next(this.users.items);
      });
    }
  }

  selectInputData(input) {
    switch (input) {
      case 'nameaz':
        this.sortSource.next('login');
        break;
      case 'nameza':
        this.sortSource.next('login : false');
        break;
      case 'rankup':
        this.sortSource.next('id');
        break;
      case 'rankdown':
        this.sortSource.next('id : false');
        break;
      default:
        this.sortSource.next('login');
    }
  }

  usersList() {
    return this.users;
  }

}
