import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-secondary-carousel',
  templateUrl: './mobile-secondary-carousel.component.html',
  styleUrls: ['./mobile-secondary-carousel.component.scss']
})
export class MobileSecondaryCarouselComponent implements OnInit {
  currentSlide = 0;
  public slides = [
    {src: "https://cdn.myanimelist.net/images/anime/1028/117777.jpg"},
    {src: "https://cdn.myanimelist.net/images/anime/1992/116576.jpg"},
    {src: "https://cdn.myanimelist.net/images/anime/1928/117620.jpg"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
