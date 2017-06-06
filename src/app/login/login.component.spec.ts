import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoadingService } from '../provider/loading.service';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule,RouterModule,RouterTestingModule],
      providers: [LoadingService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a login form', ()=> {
     var loginForm = fixture.nativeElement.getElementsByTagName('form');
     expect(loginForm).toBeTruthy();
  });

  it('should display name and password on login form',()=> {
    var loginForm = fixture.nativeElement.getElementsByTagName('form');
    var nameText = loginForm[0].getElementsByTagName('label')[0].innerText;
    var passwordText = loginForm[0].getElementsByTagName('label')[1].innerText;
    expect(nameText).toBe('Name');
    expect(passwordText).toBe('Password');
  });
});
