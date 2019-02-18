import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SearchDisclaimerComponent } from './search-disclaimer.component';

describe('SearchDisclaimerComponent', () => {
  let component: SearchDisclaimerComponent;
  let fixture: ComponentFixture<SearchDisclaimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDisclaimerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render no-results-disclaimer if noResults prop is true', () => {
    component.noResults = true;
    fixture.detectChanges();
    const el: HTMLElement = fixture.debugElement.query(By.css('[data-test="no-results-disclaimer"]'))
      .nativeElement;
    expect(el).toBeDefined();
  });

  it('should render default-disclaimer if noResults prop is false', () => {
    const el: HTMLElement = fixture.debugElement.query(By.css('[data-test="default-disclaimer"]')).nativeElement;
    expect(el).toBeDefined();
  });
});
