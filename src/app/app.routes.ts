import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'courses',
    loadComponent: () => import('./pages/courses/courses.page').then((m) => m.CoursesPage),
  },
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/recipes/recipes.page').then((m) => m.RecipesPage),
      },
      {
        path: ':recipeId',
        loadComponent: () => import('./pages/recipes/recipe-detail/recipe-detail.page').then(m => m.RecipeDetailPage)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
];
