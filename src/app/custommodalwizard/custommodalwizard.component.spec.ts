import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustommodalwizardComponent } from './custommodalwizard.component';

describe('CustommodalwizardComponent', () => {
  let component: CustommodalwizardComponent;
  let fixture: ComponentFixture<CustommodalwizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustommodalwizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustommodalwizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
