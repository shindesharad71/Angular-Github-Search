import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: any;
  repos: any;

  constructor(private api: ApiService, private http: HttpClient) {
    this.api.currentMessage.subscribe(message => this.users = message);
  }

  ngOnInit() {
    this.users = this.api.users;
  }

  getUserdata() {
    this.users = this.api.users;
    return this.users;
  }

  userDetails(username) {
    if (username) {
      this.repos = '';
      const url: any = `https://api.github.com/users/${username}/repos`;
      this.http.get(url).subscribe(data => {
        this.repos = data;
      });
    }
  }

}
