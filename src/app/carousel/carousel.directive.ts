import { Directive, ElementRef, Host, AfterViewInit, OnDestroy } from '@angular/core';
import { CarouselComponent } from './carousel.component';

@Directive({
    selector: '[app-carousel-item]'
})

export class CarouselItem implements AfterViewInit {
    constructor(private el:ElementRef, @Host() private carousel: CarouselComponent) {}

    ngAfterViewInit(){
        this.carousel.addSlide(this);
    }

    ngOnDestroy(){
        this.carousel.removeSlide(this);
    }
    
}