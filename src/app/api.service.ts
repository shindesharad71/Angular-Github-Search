import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  users: any;

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  searchUsers(term) {
    if (term.length > 3) {
      this.http.get('https://api.github.com/search/users?q=' + term).subscribe(data => {
        this.users = data;
        this.messageSource.next(this.users);
        console.log(this.users);
      });
    }
  }

  usersList() {
    return this.users;
  }

}
