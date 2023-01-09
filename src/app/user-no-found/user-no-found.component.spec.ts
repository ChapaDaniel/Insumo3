import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNoFoundComponent } from './user-no-found.component';

describe('UserNoFoundComponent', () => {
  let component: UserNoFoundComponent;
  let fixture: ComponentFixture<UserNoFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNoFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNoFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
