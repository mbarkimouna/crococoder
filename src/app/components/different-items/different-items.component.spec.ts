import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentItemsComponent } from './different-items.component';

describe('DifferentItemsComponent', () => {
  let component: DifferentItemsComponent;
  let fixture: ComponentFixture<DifferentItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
