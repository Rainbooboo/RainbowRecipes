import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Swiper } from 'swiper';
import { CommonService } from '../../shared/services/common.service';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  query!: string;
    searchForm!: FormGroup;
    searchResults: any[] = [];
  featuredRecipe: any[] = [];

  breakPoints = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }

  constructor(private commonService: CommonService, private fb: FormBuilder){

  }

  ngOnInit(): void { 
    this.initform();
    this.getFeaturedRecipes();
    this.getRecipes();
  }

  ngAfterViewInit() {
  
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  
  searchFor(value:string){
    // console.log(value)
    this.searchForm.patchValue({
      query: value
    })
    this.getRecipes();
  }


  initform(){
    this.searchForm = this.fb.group({
      query: ['']
    })
  }

  getRecipes() {
    this.query = this.searchForm.get('query')?.value
    // console.log(this.query)
    this.commonService.searchForRecipe(this.query).subscribe({
      next: (res) => {
        // console.log(res);
        this.searchResults = res.results;
      },
      error: (err) => {
        // console.log(err);

      }
    })
  }

  getFeaturedRecipes(){
    this.commonService.getRandomRecipes().subscribe({
      next: (res) =>{
        // console.log(res);
        this.featuredRecipe = res.recipes
      },
      error(err) {
        // console.log(err);
          
      },
    })
  }

}
