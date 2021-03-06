import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'app/shared';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Item } from '../../shared/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: Item;
  constructor( private itemsService: ItemsService,
                private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .map((params: ParamMap) => +params.get('id'))
      .switchMap( id => this.itemsService.load(id))
      .subscribe( item => this.item = item);
  }


  saveItem(item) {
    // Do something
  }

  cancel(item) {
    // Do something
  }

}
