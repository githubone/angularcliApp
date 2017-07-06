import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0loginComponent } from './auth0login.component';

describe('Auth0loginComponent', () => {
  let component: Auth0loginComponent;
  let fixture: ComponentFixture<Auth0loginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auth0loginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth0loginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
