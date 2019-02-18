import { Component, OnInit, Input } from '@angular/core';
import { Parcel } from '../parcel';

@Component({
  selector: 'app-parcel-shipper',
  templateUrl: './parcel-shipper.component.html',
  styleUrls: ['./parcel-shipper.component.scss']
})
export class ParcelShipperComponent implements OnInit {
  @Input() parcel: Parcel;

  constructor() {}

  ngOnInit() {}
}
