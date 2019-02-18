import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Parcel } from '../parcel';
import { ParcelService } from '../parcel.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  parcel: Parcel;

  constructor(private route: ActivatedRoute, private parcelService: ParcelService) {}

  ngOnInit() {
    this.getParcelDetails();
  }

  getParcelDetails(): void {
    const trackingNumber = this.route.snapshot.paramMap.get('trackingNumber');
    this.parcelService.getCurrentParcel(trackingNumber).subscribe(parcel => (this.parcel = parcel));
  }
}
