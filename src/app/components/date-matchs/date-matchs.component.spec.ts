import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateMatchsComponent } from './date-matchs.component';

describe('DateMatchsComponent', () => {
  let component: DateMatchsComponent;
  let fixture: ComponentFixture<DateMatchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateMatchsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateMatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
