import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

import { PagerService } from '../pager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: any;
  repos: any;
  show: string;
  loading = false;
  query = '';

  p: number = 1;
  collection: any[] = this.users;

  constructor(private api: ApiService, private http: HttpClient, private pagerService: PagerService) {
    this.api.currentMessage.subscribe(message => this.users = message);
    this.api.sortMessage.subscribe(message => this.query = message);
  }

  ngOnInit() {
    this.users = this.api.users;
  }

  getUserdata() {
    this.users = this.api.users;
    return this.users;
  }

  sortData() {
    this.users.items.sort();
  }

  userDetails(username) {
    if (username) {
      this.loading = true;
      this.show = username;
      this.repos = '';
      const url: any = `https://api.github.com/users/${username}/repos`;
      this.http.get(url).subscribe(data => {
        this.repos = data;
      });
      this.loading = false;
    }
  }

}
