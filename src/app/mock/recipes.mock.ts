import { IRecipe } from '../interfaces/recipe.interface';

export const recipesMock: IRecipe[] = [
  {
    _id: 'r1',
    title: 'Schnitzel',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2FLeyN-7W9T0KB2nl6pcuDZckHnjc%3D%2F4288x2848%2Ffilters%3Afill(auto%2C1)%2Fwiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg&f=1&nofb=1&ipt=3045994e802414bd5fcd9ea595deb42bdc942601cf7e03c6c9a0b773701b31ca&ipo=images',
    ingredients: ['French fries', 'Salad'],
  },
  {
    _id: 'r2',
    title: 'Spaghetti',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiheartrecipes.com%2Fwp-content%2Fuploads%2F2015%2F01%2FIMG_85881.jpg&f=1&nofb=1&ipt=768d806baf4710965e42f9f44b4c277c0d362558e47c40fd7960f3f7b934ba9a&ipo=images',
    ingredients: ['Pasta', 'Meat'],
  }
]
