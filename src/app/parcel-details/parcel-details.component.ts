import { Component, OnInit, Input } from '@angular/core';
import { Parcel } from '../parcel';

@Component({
  selector: 'app-parcel-details',
  templateUrl: './parcel-details.component.html',
  styleUrls: ['./parcel-details.component.scss']
})
export class ParcelDetailsComponent implements OnInit {
  @Input() parcel: Parcel;

  constructor() {}

  ngOnInit() {}
}
