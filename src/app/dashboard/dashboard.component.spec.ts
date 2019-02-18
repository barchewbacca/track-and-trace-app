import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';
import { SearchComponent } from '../search/search.component';
import { SearchDisclaimerComponent } from '../search-disclaimer/search-disclaimer.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [DashboardComponent, SearchComponent, SearchDisclaimerComponent],
      providers: [{ provide: Router, useValue: mockRouter }, HttpClient, HttpHandler]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
