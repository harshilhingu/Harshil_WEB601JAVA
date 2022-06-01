import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbikeComponent } from './hbike.component';

describe('HbikeComponent', () => {
  let component: HbikeComponent;
  let fixture: ComponentFixture<HbikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
