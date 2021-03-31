import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from 'app/shared';

@Component({
  selector: 'app-widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.css']
})
export class WidgetDetailsComponent  {
  originalName;
  selectedWidget: Widget;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set widget(value: Widget){

  if (value) { this.originalName = value.name; }
  this.selectedWidget = Object.assign({}, value);
  }

}
