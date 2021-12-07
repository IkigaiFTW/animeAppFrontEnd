import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-mobile-main-carousel',
  templateUrl: './mobile-main-carousel.component.html',
  styleUrls: ['./mobile-main-carousel.component.scss']
})
export class MobileMainCarouselComponent implements OnInit {
  animationState: string = "";
  currentSlide = 0;
  public slides = [
    {src: "https://cdn.myanimelist.net/images/anime/1028/117777.jpg"},
    {src: "https://cdn.myanimelist.net/images/anime/1992/116576.jpg"},
    {src: "https://cdn.myanimelist.net/images/anime/1928/117620.jpg"}
  ]
  constructor() { }

  ngOnInit(): void {
  } 
  
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);  
  }
  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}
