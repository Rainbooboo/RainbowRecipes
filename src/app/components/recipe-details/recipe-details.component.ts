import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecipeDetailsComponent {

  breakPoints = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }

  ingredients: string[] = [  
    '1 whole chicken (about 3-4 pounds)',  
    '2 lemons, sliced',  
    '6 cloves garlic, minced',  
    '2 tablespoons olive oil',  
    '1 teaspoon dried thyme',  
    '1 teaspoon dried rosemary',  
    'Salt and black pepper to taste'  
  ];  
  equipments: string[] = [  
    'Roasting pan',  
    'Meat thermometer',  
    'Cutting board',  
    'Kitchen twine' 
  ]; 

}
