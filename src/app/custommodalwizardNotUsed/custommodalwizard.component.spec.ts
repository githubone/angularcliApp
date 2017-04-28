import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustommodalwizardComponent } from './custommodalwizard.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay  } from 'angular2-modal';
import { ModalModule } from 'angular2-modal';


describe('CustommodalwizardComponent', () => {
  let component: CustommodalwizardComponent;
  let fixture: ComponentFixture<CustommodalwizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustommodalwizardComponent ],
        imports: [ModalModule.forRoot(),HttpModule, FormsModule,ModalModule],
        providers: [Modal,Overlay]
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
