import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ParcelService } from './parcel.service';
import { mockParcel } from '../testing';

describe('ParcelService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ParcelService]
    })
  );

  it('should be created', () => {
    const service: ParcelService = TestBed.get(ParcelService);
    expect(service).toBeTruthy();
  });

  it('#setCurrentParcel should set the current parcel', inject([ParcelService], (service: ParcelService) => {
    service.setCurrentParcel(mockParcel);
    expect(service.currentParcel.getValue()).toEqual(mockParcel);
  }));

  it('#getCurrentParcel should get the current parcel', inject(
    [ParcelService, HttpTestingController],
    (service: ParcelService, backend: HttpTestingController) => {
      service.getCurrentParcel(mockParcel.id);
      backend
        .expectOne({
          method: 'GET',
          url: `http://localhost:4201/api/v1/parcels/${mockParcel.id}`
        })
        .flush(mockParcel);
      expect(service.currentParcel.getValue()).toEqual(mockParcel);
    }
  ));

  it('#getParcel should get one parcel', inject(
    [ParcelService, HttpTestingController],
    (service: ParcelService, backend: HttpTestingController) => {
      service.getParcel(mockParcel.id).subscribe(parcel => {
        expect(parcel).toEqual(mockParcel);
      });

      backend
        .expectOne({
          method: 'GET',
          url: `http://localhost:4201/api/v1/parcels/${mockParcel.id}`
        })
        .flush(mockParcel);
    }
  ));
});
