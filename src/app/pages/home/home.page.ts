import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonIcon, IonList, IonLabel, IonNote, IonAlert,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline, closeOutline } from 'ionicons/icons';

interface IExpense {
  reason: string;
  amount: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonInput, IonButton, IonIcon, IonList, IonLabel, IonNote, IonAlert],
})
export class HomePage {
  text = 'Ready to create an app?';
  expenseReason: string = '';
  expenseAmount: number = 0;
  expensesList: IExpense[] = [];
  totalExpenses: number = 0;
  isAlertOpen = false;
  alertButtons = ['Action'];

  constructor() {
    addIcons({ addOutline, closeOutline });
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  addExpense() {
    if (this.expenseReason.trim().length < 0 || this.expenseAmount <= 0) {
      this.setOpen(true);
      return;
    }
    this.expensesList.push({ reason: this.expenseReason, amount: this.expenseAmount });
    this.totalExpenses += this.expenseAmount;
  }

  clearInputs() {
    this.expenseReason = '';
    this.expenseAmount = 0;
  }
}
