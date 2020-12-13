import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubmittedDataComponent } from './user-submitted-data.component';

describe('UserSubmittedDataComponent', () => {
  let component: UserSubmittedDataComponent;
  let fixture: ComponentFixture<UserSubmittedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSubmittedDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSubmittedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
