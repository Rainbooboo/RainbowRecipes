import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
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



  recipeId!: number;
  recipeDetails: any;
  equipmentList: any[] = [];
  similarRecipe: any[] = [];

  constructor(private route: ActivatedRoute, private commonService: CommonService){

  }

  ngOnInit(): void {
    this.recipeId = Number(this.route.snapshot.paramMap.get('id')); 
    this.getRecipeDetails();
    this.getSimilarRecipe();
  }
  onClick(id: any){
    this.recipeId = Number(id)
    this.getRecipeDetails();
  }

  getRecipeDetails() {
    this.commonService.getRecipeById(this.recipeId).subscribe({
      next: (res) => {
        this.recipeDetails = res;
        // console.log(this.recipeDetails);

        // Extract equipment if available
        if (res.analyzedInstructions?.length > 0) {
          this.equipmentList = res.analyzedInstructions.flatMap((instruction: { steps: any[]; }) =>
            instruction.steps.flatMap((step: any) => step.equipment)
          );
  
          // Remove duplicate equipment items based on 'name'
          this.equipmentList = this.equipmentList.filter((item, index, self) =>
            index === self.findIndex((t) => t.name === item.name)
          );
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getSimilarRecipe() {
    this.commonService.getSimilarRecipe(this.recipeId).subscribe({
      next: (res) => {
        this.similarRecipe = res;
        // console.log(this.similarRecipe);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
