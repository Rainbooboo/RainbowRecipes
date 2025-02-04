import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Swiper } from 'swiper';
import { CommonService } from '../../shared/services/common.service';
// import Swiper from 'pagedone';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {

  activeTab = 'tab1';

  featuredRecipe: any[] = [];

  breakPoints = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }

  constructor(private commonService: CommonService){

  }

  ngOnInit(): void { 
    this.getFeaturedRecipes();
  }

  ngAfterViewInit() {
  
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  getFeaturedRecipes(){
    this.commonService.getRandomRecipes().subscribe({
      next: (res) =>{
        console.log(res);
        this.featuredRecipe = res.recipes
      },
      error(err) {
        console.log(err);
          
      },
    })
  }

}
