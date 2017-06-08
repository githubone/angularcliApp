import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay  } from 'angular2-modal';
import { ModalModule } from 'angular2-modal';
import { WelcomeComponent } from './welcome.component';
import { LoadingService } from '../provider/loading.service';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
       imports: [ModalModule.forRoot(), ModalModule],
        providers: [Modal, Overlay, LoadingService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
