import { Component } from '@angular/core';
import {
  IonAlert,
  IonButton,
  IonCard,
  IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid,
  IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonNote, IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { addOutline, closeOutline } from 'ionicons/icons';

interface ICourse {
  name: string;
  rating: number;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonAlert,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonRow,
    NgForOf,
    FormsModule,
  ],
})
export class CoursesPage {
  courseList: ICourse[] = [];
  courseName: string = '';
  courseRating: number = 0;
  isAlertOpen = false;
  alertButtons = ['Action'];

  constructor() {
    addIcons({ addOutline, closeOutline });
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  addExpense() {
    if (this.courseName.trim().length < 0 || this.courseRating <= 0 || this.courseRating > 5) {
      this.setOpen(true);
      return;
    }
    this.courseList.push({ name: this.courseName, rating: this.courseRating });
  }

  clearInputs() {
    this.courseName = '';
    this.courseRating = 0;
  }
}
