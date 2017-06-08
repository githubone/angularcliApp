import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain links to display videos listing', ()=> {
      //fixture.nativeElement.getElementsByClassName('nav navbar-nav')[0].getElementsByClassName('dropdown')[0].getElementsByTagName('a')[0].innerText
      const videoLists  = fixture.nativeElement.getElementsByClassName('nav navbar-nav')[0].getElementsByClassName('dropdown');
      expect(videoLists.length).toBeGreaterThan(0);
  });

  it('should contain Home link', ()=> {
    const menuLinks = fixture.nativeElement.getElementsByClassName('nav navbar-nav')[0].getElementsByClassName('dropdown');
    expect(menuLinks[0].getElementsByTagName('a')[0].innerText).toBe("Home");
  });
});
