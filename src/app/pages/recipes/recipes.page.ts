import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ViewWillEnter } from '@ionic/angular';

import { IRecipe } from '../../interfaces/recipe.interface';
import { RecipesService } from './recipes.service';
import { RouterLink } from '@angular/router';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink, RecipeItemComponent],
})
export class RecipesPage implements ViewWillEnter {

  recipes: IRecipe[];

  constructor(
    private recipesService: RecipesService,
  ) {
  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getRecipes();
  }
}
