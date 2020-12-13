import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubmittedListComponent } from './user-submitted-list.component';

describe('UserSubmittedListComponent', () => {
  let component: UserSubmittedListComponent;
  let fixture: ComponentFixture<UserSubmittedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSubmittedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSubmittedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
