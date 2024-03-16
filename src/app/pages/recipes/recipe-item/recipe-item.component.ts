import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { IRecipe } from '../../../interfaces/recipe.interface';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink],
})
export class RecipeItemComponent {
  @Input({ required: true }) recipe: IRecipe;
}
