import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';

import { IRecipe } from '../../../interfaces/recipe.interface';
import { RecipesService } from '../recipes.service';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonList,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonButton, IonIcon, IonContent, IonGrid, IonRow, IonCol, IonImg, IonList, IonItem],
})
export class RecipeDetailPage implements OnInit, OnDestroy {

  recipe: IRecipe;

  sub$: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertController: AlertController,
  ) {
    addIcons({ trash });
  }

  ngOnInit() {
    const recipe$ = this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes']).then();
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.recipe = this.recipesService.getRecipeById(recipeId);
    });
    this.sub$.add(recipe$);
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  deleteRecipe() {
    this.recipesService.deleteRecipeById(this.recipe._id);
    this.router.navigate(['/recipes']).then();
  }

  async onDeleteRecipe() {
    const alert = await this.alertController.create({
      header: 'Are you sure',
      message: 'Do you really want to remove?',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { text: 'Delete', handler: () => this.deleteRecipe() },
      ],
    });

    await alert.present();
  }
}

