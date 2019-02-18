import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Parcel } from '../parcel';
import { ParcelService } from '../parcel.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() isSmallSearch: boolean;
  trackingNumber: string = '';
  isLabelTop: boolean = false;
  noResults: boolean = false;

  constructor(private router: Router, private parcelService: ParcelService) {}

  ngOnInit() {}

  liftLabel(shouldMoveTop: boolean) {
    this.isLabelTop = shouldMoveTop;
  }

  showDetails(parcel: Parcel) {
    this.parcelService.setCurrentParcel(parcel);
    this.router.navigateByUrl(`/details/${parcel.id}`);
    this.parcelService.stopLoader();
  }

  showError() {
    this.noResults = true;
    this.parcelService.stopLoader();
  }

  onSubmit(): void {
    const id = this.trackingNumber;
    this.parcelService.startLoader();
    this.parcelService.getParcel(id).subscribe(parcel => (parcel ? this.showDetails(parcel) : this.showError()));
  }
}
