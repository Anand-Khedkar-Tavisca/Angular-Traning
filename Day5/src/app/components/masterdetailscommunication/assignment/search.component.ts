import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../../services/app.coomunication.service';

@Component({
  selector: 'app-search-component',
  template: `
  Search  <input [(ngModel)]="search">
  `
})
export class SearchComponent implements OnInit {
  private _search: string
  get search(): string {
    return this._search;
  }
  set search(srch :string){
    this.comunicationService.onCurrentSearch(srch);
    this._search = srch;
  }
  constructor(private comunicationService: CommunicationService) {

  }

  ngOnInit(): void { }
}
