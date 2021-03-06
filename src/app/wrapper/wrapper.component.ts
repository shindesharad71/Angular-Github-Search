import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  sortEx = '';

  constructor(private api: ApiService) { }

  ngOnInit() {}

  search(term) {
    this.api.searchUsers(term);
  }

  selectBox(sortVal) {
    this.api.selectInputData(sortVal);
  }

}
