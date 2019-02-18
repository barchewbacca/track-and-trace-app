import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  host: {
    class: 'flex flex-col flex-grow'
  }
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
