import { Injectable } from '@angular/core';

import { recipesMock } from '../../mock/recipes.mock';
import { IRecipe } from '../../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {

  recipes: IRecipe[] = recipesMock;

  constructor() {
  }

  getRecipes(): IRecipe[] {
    return this.recipes.slice();
  }

  getRecipeById(id: string): IRecipe {
    return { ...this.recipes.find((r) => r._id === id) };
  }

  deleteRecipeById(id: string) {
    this.recipes = this.recipes.filter((r) => r._id !== id).slice();
  }
}
