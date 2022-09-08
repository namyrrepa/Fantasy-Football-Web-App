import { Component, OnInit } from '@angular/core';
import { sffflInfo } from '../sfffl-info'
import { sffflTeam } from '../sfffl-team'

@Component({
  selector: 'app-sfffl-info',
  templateUrl: './sfffl-info.component.html',
  styleUrls: ['./sfffl-info.component.css']
})

export class SffflInfoComponent implements OnInit {
  pageTitle = 'Sunday Funday Fantasy Football League';
  teams: sffflTeam[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
