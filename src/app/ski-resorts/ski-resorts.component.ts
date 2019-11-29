import { Component, OnInit } from '@angular/core';
import { SkiServiceService } from '../service/ski-service.service';
import { ActivatedRoute } from '@angular/router';
import { SkiResort } from './Model/skiResort';

@Component({
  selector: 'ski-ski-resorts',
  templateUrl: './ski-resorts.component.html',
  styleUrls: ['./ski-resorts.component.css']
})
export class SkiResortsComponent implements OnInit {

  skiResort: SkiResort;

  constructor(private skiService: SkiServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      let id = param['id'];
      this.skiService.getAllResorts(id).subscribe(params =>{
        this.skiResort = params;
      } )
    })
  }

}
