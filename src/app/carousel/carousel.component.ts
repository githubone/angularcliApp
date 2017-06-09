import { Component, OnInit, ElementRef, NgZone } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private el:ElementRef, private zone:NgZone) { }
  intialized = false;
  slides= [];
  $carousel:any;

  ngOnInit() {
    this.initCarousel();
  }

  initCarousel(){
    this.zone.runOutsideAngular( () => {
      debugger;
      
      this.$carousel = $(this.el.nativeElement).slick({});
    })
    this.intialized = true;
  }

  addSlide(slide) {
    this.intialized && this.initCarousel();
    this.slides.push(slide);
    this.$carousel.slick('slickAdd', slide.el.nativeElement)
  }

  removeSlide(slide){
    const idx = this.slides.indexOf(slide);
    this.$carousel.slick('slickRemove',idx);
    this.slides = this.slides.filter(s => s != slide);
  }

}
