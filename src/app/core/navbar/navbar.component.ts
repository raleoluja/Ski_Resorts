import { Component, OnInit } from '@angular/core';
import { SkiServiceService } from 'src/app/service/ski-service.service';
import { SkiResortNameList } from 'src/app/ski-resorts/Model/SkiRisortNameList';

@Component({
  selector: 'ski-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  skiResorts: SkiResortNameList;
  
  constructor(private skiService: SkiServiceService) { }

  ngOnInit() {
    this.skiService.getAll().subscribe(data => this.skiResorts = data);
  }

}
