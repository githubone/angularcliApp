import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomModal } from './custommodal.component';

describe('CustommodalComponent', () => {
  let component: CustomModal;
  let fixture: ComponentFixture<CustomModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
