import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-disclaimer',
  templateUrl: './search-disclaimer.component.html',
  styleUrls: ['./search-disclaimer.component.scss']
})
export class SearchDisclaimerComponent implements OnInit {
  @Input() noResults: boolean;
  constructor() {}

  ngOnInit() {}
}
