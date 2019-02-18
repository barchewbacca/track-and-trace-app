import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { SearchComponent } from './search.component';
import { SearchDisclaimerComponent } from '../search-disclaimer/search-disclaimer.component';
import { ParcelService } from '../parcel.service';
import { newEvent, mockParcel } from '../../testing';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let getParcelSpy: jasmine.Spy;
  let startLoaderSpy: jasmine.Spy;
  let stopLoaderSpy: jasmine.Spy;
  let setCurrentParcelSpy: jasmine.Spy;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const parcelService = jasmine.createSpyObj('ParcelService', [
    'getParcel',
    'setCurrentParcel',
    'startLoader',
    'stopLoader'
  ]);
  getParcelSpy = parcelService.getParcel.and.returnValue(of(mockParcel));
  setCurrentParcelSpy = parcelService.setCurrentParcel.and.callThrough(() => {
    parcelService.currentParcel.next(mockParcel);
  });
  startLoaderSpy = parcelService.startLoader.and.callThrough();
  stopLoaderSpy = parcelService.stopLoader.and.callThrough();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SearchComponent, SearchDisclaimerComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ParcelService, useValue: parcelService },
        HttpClient,
        HttpHandler
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onFocus', () => {
    it('should lift the label', () => {
      const inputElement: HTMLInputElement = fixture.debugElement.query(By.css('[data-test="input"]')).nativeElement;
      inputElement.dispatchEvent(newEvent('focus'));
      expect(component.isLabelTop).toBeTruthy();
    });
  });

  describe('onBlur', () => {
    it('should lower the label if input is empty', () => {
      const inputElement: HTMLInputElement = fixture.debugElement.query(By.css('[data-test="input"]')).nativeElement;
      inputElement.value = '';
      inputElement.dispatchEvent(newEvent('blur'));
      expect(component.isLabelTop).toBeFalsy();
    });

    it('should leave the label lifted if input is not empty', () => {
      const inputElement: HTMLInputElement = fixture.debugElement.query(By.css('[data-test="input"]')).nativeElement;
      inputElement.value = 'test';
      inputElement.dispatchEvent(newEvent('blur'));
      expect(component.isLabelTop).toBeTruthy();
    });
  });

  describe('onSubmit', () => {
    it('should show the parcel details if parcel with this tracking number found', () => {
      const formElement: HTMLFormElement = fixture.debugElement.query(By.css('[data-test="form"]')).nativeElement;
      const inputElement: HTMLInputElement = fixture.debugElement.query(By.css('[data-test="input"]')).nativeElement;

      fixture
        .whenStable()
        .then(() => {
          inputElement.value = mockParcel.id;
          inputElement.dispatchEvent(newEvent('input'));
          return fixture.whenStable();
        })
        .then(() => {
          formElement.dispatchEvent(newEvent('submit'));
          return fixture.whenStable();
        })
        .then(() => {
          expect(routerSpy.navigateByUrl).toHaveBeenCalledWith(`/details/${mockParcel.id}`);
        });
    });
  });
});
