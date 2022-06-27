import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogItemDataTableComponent } from './log-item-data-table.component';

describe('LogItemDataTableComponent', () => {
  let component: LogItemDataTableComponent;
  let fixture: ComponentFixture<LogItemDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogItemDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogItemDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
