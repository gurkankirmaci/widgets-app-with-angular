import { Component, OnInit   } from '@angular/core';
import { WidgetsService, Widget } from 'app/shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: [ './widgets.component.css']
})
export class WidgetsComponent implements OnInit  {
  selectedWidget: Widget;
  widgets: Widget[];

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.loadWidgets();
    this.reset();
  }

  loadWidgets(){
    this.widgetsService.all()
      .subscribe(widgets => this.widgets = widgets);
  }

  selectWidget(widget){
    this.selectedWidget = widget;
  }

  reset(){
    this.selectedWidget = {id: null, name: '', description: ''}
  }

  cancel(widget){
    this.reset();
  }

  saveWidget(widget){
    if (!widget.id){  //widget doenst have an id
      this.execute(widget, 'create');
    }else {
      this.execute(widget, 'update' );
    }
  }

  execute (widget, action){
    this.widgetsService[action](widget)
      .subscribe(result => {
        this.loadWidgets();
        this.reset();
      });
  }

  createWidget(widget){
    this.widgetsService.create(widget)
    .subscribe(result => {
      this.loadWidgets();
      this.reset();
    });
  }

  updateWidget(widget){
    this.widgetsService.update(widget)
    .subscribe(result => {
      this.loadWidgets();
      this.reset();
    });
  }

  deleteWidget(widget){
    this.widgetsService.delete(widget)
    .subscribe(result => {
      this.loadWidgets();
      this.reset();
    });
  }
}
