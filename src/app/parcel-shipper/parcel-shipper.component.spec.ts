import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ParcelShipperComponent } from './parcel-shipper.component';
import { mockParcel } from '../../testing';

describe('ParcelShipperComponent', () => {
  let component: ParcelShipperComponent;
  let fixture: ComponentFixture<ParcelShipperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelShipperComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelShipperComponent);
    component = fixture.componentInstance;
    component.parcel = mockParcel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render service logo', () => {
    const el: HTMLElement = fixture.debugElement.query(By.css('[data-test="serviceLogo"]')).nativeElement;
    expect(el.getAttribute('src')).toEqual(mockParcel.serviceLogo.src);
    expect(el.getAttribute('alt')).toEqual(mockParcel.serviceLogo.alt);
    expect(el.getAttribute('width')).toEqual(mockParcel.serviceLogo.width.toString());
  });

  it('should render "service" value', () => {
    const el: HTMLElement = fixture.debugElement.query(By.css('[data-test="service"]')).nativeElement;
    expect(el.textContent).toEqual(mockParcel.service);
  });

  it('should render "deliveredOn" value', () => {
    const el: HTMLElement = fixture.debugElement.query(By.css('[data-test="deliveredOn"]')).nativeElement;
    expect(el.textContent).toEqual(mockParcel.deliveredOn);
  });

  it('should render "packageNumber" value', () => {
    const el: HTMLElement = fixture.debugElement.query(By.css('[data-test="packageNumber"]')).nativeElement;
    expect(el.textContent).toEqual(mockParcel.packageNumber);
  });

  it('should render "pickupTime" value', () => {
    const el: HTMLElement = fixture.debugElement.query(By.css('[data-test="pickupTime"]')).nativeElement;
    expect(el.textContent).toEqual(mockParcel.pickupTime);
  });

  it('should render "orderNumber" value', () => {
    const el: HTMLElement = fixture.debugElement.query(By.css('[data-test="orderNumber"]')).nativeElement;
    expect(el.textContent).toEqual(mockParcel.orderNumber);
  });
});
