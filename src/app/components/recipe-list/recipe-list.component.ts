import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { CommonService } from '../../shared/services/common.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent,],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',

})
export class RecipeListComponent {
  activeTab = 'tab1';
  query!: string;
  searchForm!: FormGroup;
  searchResults: any[] = [];
  recipes: any[] = [];

  constructor(private commonService:CommonService, private fb: FormBuilder){
    
  }
  ngOnInit(): void {
    this.initform();
  }
  
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }


  handleSearchResults(data: any[]) {
    this.recipes = data;
  }  searchFor(value:string){
    console.log(value)
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
    console.log(this.query)
    this.commonService.searchForRecipe(this.query).subscribe({
      next: (res) => {
        console.log(res);
        this.searchResults = res.results;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }


}
