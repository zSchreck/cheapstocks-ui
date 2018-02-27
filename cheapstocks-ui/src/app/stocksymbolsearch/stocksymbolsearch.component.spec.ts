import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksymbolsearchComponent } from './stocksymbolsearch.component';

describe('StocksymbolsearchComponent', () => {
  let component: StocksymbolsearchComponent;
  let fixture: ComponentFixture<StocksymbolsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksymbolsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksymbolsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
