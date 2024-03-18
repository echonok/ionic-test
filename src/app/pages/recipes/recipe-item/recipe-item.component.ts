import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IRecipe } from '../../../interfaces/recipe.interface';
import { IonAvatar, IonImg, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
  standalone: true,
  imports: [IonItem, RouterLink, IonAvatar, IonImg, IonLabel],
})
export class RecipeItemComponent {
  @Input({ required: true }) recipe: IRecipe;
}
