import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { Item } from '../shared/item.model';
import { Widget } from '../shared/widget.model';
import { WidgetsService } from '../shared/widgets.service'
import { NotificationsService } from 'app/shared/notifications.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  items: Item[];
  widgets: Widget[];
  myStatus= 'active';

  constructor(private itemsService: ItemsService,
              private widgetsService: WidgetsService,
              private notifications: NotificationsService,
               ) { }

  ngOnInit() {
    this.getItems();

  }

  getItems() {
    this.itemsService.all()
      .subscribe(items => this.items = items);

  }

  handleResults(items){
    this.items = items;
  }
  /*
  logout($event){
    this.myStatus = 'LOGGED OUT!';
  }*/
}
