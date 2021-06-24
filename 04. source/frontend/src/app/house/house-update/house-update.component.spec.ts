import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseUpdateComponent } from './house-update.component';

describe('HouseUpdateComponent', () => {
  let component: HouseUpdateComponent;
  let fixture: ComponentFixture<HouseUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
