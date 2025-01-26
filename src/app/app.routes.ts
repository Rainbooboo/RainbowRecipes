import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CookingTipsComponent } from './components/cooking-tips/cooking-tips.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Homepage
    { path: 'home', component: HomeComponent }, // Homepage
    { path: 'search', component: SearchComponent }, // Search page
    { path: 'recipes', component: RecipeListComponent }, // Recipe list
    { path: 'recipe/:id', component: RecipeDetailsComponent }, // Recipe details
    { path: 'cooking-tips', component: CookingTipsComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: '**', component: PageNotFoundComponent },
    // { path: '**', redirectTo: '' } 
];
