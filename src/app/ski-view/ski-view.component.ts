import { Component, OnInit, Input } from '@angular/core';
import { SkiResort } from '../ski-resorts/Model/skiResort';

@Component({
  selector: 'app-ski-view',
  templateUrl: './ski-view.component.html',
  styleUrls: ['./ski-view.component.css']
})
export class SkiViewComponent implements OnInit {
  @Input() skiResort;

  constructor() { }

  ngOnInit() {
  }

}
