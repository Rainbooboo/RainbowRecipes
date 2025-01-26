import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { Swiper } from 'swiper';
// import Swiper from 'pagedone';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {

  swiper!: Swiper;
  activeTab = 'tab1';

  breakPoints = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    // 1024: {
    //   slidesPerView: 3
    // },
  }

  constructor(){

  }

  ngOnInit(): void { 
  }

  ngAfterViewInit() {
  
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
