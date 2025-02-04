import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent,],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',

})
export class RecipeListComponent {
  activeTab = 'tab1';

  constructor(private commonService:CommonService){
    
  }
  ngOnInit(): void {
    
  }
  
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  recipes: any[] = [];

  handleSearchResults(data: any[]) {
    this.recipes = data;
  }
}
