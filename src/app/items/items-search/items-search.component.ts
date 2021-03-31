import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ItemsService } from '../../shared/items.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { distinctUntilChanged } from 'rxjs/operator/distinctUntilChanged';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.css']
})
export class ItemsSearchComponent implements OnInit {
  @ViewChild('itemsSearch') itemsSearch;
  @Output() results = new EventEmitter();

  constructor(private itemsService: ItemsService) {
  }

  ngOnInit() {
    const search$ =
      Observable.fromEvent(this.getNativeElement(this.itemsSearch), 'keyup')
        .debounceTime(200)
        .distinctUntilChanged()
        .map((event: any) => event.target.value)
        .switchMap(query => this.itemsService.search(query))
        .subscribe(items => this.results.emit(items));
  }

  getNativeElement(element) {
    return element.nativeElement;
  }
}
