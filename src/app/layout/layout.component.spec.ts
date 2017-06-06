import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { LayoutComponent } from './layout.component';
 import { RouterTestingModule } from '@angular/router/testing';
 import {DataService} from '../provider/data.service';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutComponent ],
       imports: [RouterModule,RouterTestingModule, HttpModule],
       providers: [DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display menus', ()=> {
    const menus = fixture.nativeElement.getElementsByTagName('ul');
    expect(menus.length).toBeGreaterThan(0);
  });
});
