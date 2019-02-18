import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParcelHistoryComponent } from './parcel-history.component';
import { mockParcel } from '../../testing';

describe('ParcelHistoryComponent', () => {
  let component: ParcelHistoryComponent;
  let fixture: ComponentFixture<ParcelHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelHistoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelHistoryComponent);
    component = fixture.componentInstance;
    component.parcel = mockParcel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "localTime" values', () => {
    const localTimeArray: DebugElement[] = fixture.debugElement.queryAll(By.css('[data-test="localTime"]'));
    localTimeArray.forEach((localTimeItem, index) => {
      const el = localTimeItem.nativeElement;
      expect(el.textContent).toEqual(mockParcel.history[index].localTime);
    });
  });

  it('should render "location" values', () => {
    const locationArray: DebugElement[] = fixture.debugElement.queryAll(By.css('[data-test="location"]'));
    locationArray.forEach((locationItem, index) => {
      const el = locationItem.nativeElement;
      expect(el.textContent).toEqual(mockParcel.history[index].location);
    });
  });

  it('should render "action" values', () => {
    const actionArray: DebugElement[] = fixture.debugElement.queryAll(By.css('[data-test="action"]'));
    actionArray.forEach((actionItem, index) => {
      const el = actionItem.nativeElement;
      expect(el.textContent).toEqual(mockParcel.history[index].action);
    });
  });
});
