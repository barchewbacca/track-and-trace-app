import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ParcelDetailsComponent } from './parcel-details.component';
import { mockParcel } from '../../testing';

describe('ParcelDetailsComponent', () => {
  let component: ParcelDetailsComponent;
  let fixture: ComponentFixture<ParcelDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelDetailsComponent);
    component = fixture.componentInstance;
    component.parcel = mockParcel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "description" value', () => {
    const el: HTMLElement = fixture.debugElement.query(By.css('[data-test="description"]')).nativeElement;
    expect(el.textContent).toEqual(mockParcel.description);
  });

  it('should render "quantity" value', () => {
    const el: HTMLElement = fixture.debugElement.query(By.css('[data-test="quantity"]')).nativeElement;
    expect(el.textContent).toEqual(mockParcel.quantity.toString());
  });

  it('should render "volume" value', () => {
    const el: HTMLElement = fixture.debugElement.query(By.css('[data-test="volume"]')).nativeElement;
    expect(el.textContent).toContain(mockParcel.volume.toString());
  });

  it('should render "weight" value', () => {
    const el: HTMLElement = fixture.debugElement.query(By.css('[data-test="weight"]')).nativeElement;
    expect(el.textContent).toContain(mockParcel.weight.toString());
  });
});
