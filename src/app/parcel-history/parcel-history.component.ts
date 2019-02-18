import { Component, OnInit, Input } from '@angular/core';
import { Parcel } from '../parcel';

@Component({
  selector: 'app-parcel-history',
  templateUrl: './parcel-history.component.html',
  styleUrls: ['./parcel-history.component.scss']
})
export class ParcelHistoryComponent implements OnInit {
  @Input() parcel: Parcel;

  constructor() {}

  ngOnInit() {}
}
