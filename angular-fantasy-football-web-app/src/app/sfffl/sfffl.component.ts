import { Component, OnInit } from '@angular/core';
import { sffflInfo } from '../sfffl-info'
import { sffflTeam } from '../sfffl-team'

@Component({
  selector: 'app-sfffl',
  templateUrl: './sfffl.component.html',
  styleUrls: ['./sfffl.component.css']
})

export class SffflComponent implements OnInit {
  pageTitle = 'Sunday Funday Fantasy Football League';
  teams: sffflTeam[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
