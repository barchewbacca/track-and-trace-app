import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';

import { DetailsComponent } from './details.component';
import { SearchComponent } from '../search/search.component';
import { ParcelDetailsComponent } from '../parcel-details/parcel-details.component';
import { ParcelHistoryComponent } from '../parcel-history/parcel-history.component';
import { ParcelShipperComponent } from '../parcel-shipper/parcel-shipper.component';
import { SearchDisclaimerComponent } from '../search-disclaimer/search-disclaimer.component';
import { ParcelService } from '../parcel.service';
import { Parcel } from '../parcel';
import { mockParcel, ActivatedRoute, ActivatedRouteStub } from '../../testing';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let getCurrentParcelSpy: jasmine.Spy;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let activatedRoute: ActivatedRouteStub;

  const parcelService = jasmine.createSpyObj('ParcelService', ['getCurrentParcel']);
  getCurrentParcelSpy = parcelService.getCurrentParcel.and.returnValue(new BehaviorSubject<Parcel>(mockParcel));

  beforeEach(async(() => {
    activatedRoute = new ActivatedRouteStub({ trackingNumber: mockParcel.id });

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        DetailsComponent,
        SearchComponent,
        ParcelDetailsComponent,
        ParcelHistoryComponent,
        ParcelShipperComponent,
        SearchDisclaimerComponent
      ],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: ParcelService, useValue: parcelService },
        HttpClient,
        HttpHandler
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get parcel details on page init', () => {
    component.ngOnInit();
    expect(component.parcel).toEqual(mockParcel);
  });
});
