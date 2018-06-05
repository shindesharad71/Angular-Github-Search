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

  constructor(private api: ApiService, private http: HttpClient, private pagerService: PagerService) {
    this.api.currentMessage.subscribe(message => this.users = message);
    this.api.sortMessage.subscribe(message => this.query = message);

    // initialize to page 1
    this.setPage(1);
  }

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
    this.users = this.api.users;
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.users.length, page);

    // get current page of items
    this.pagedItems = this.users.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
