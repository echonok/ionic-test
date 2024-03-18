import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonAlert,
  IonButton,
  IonCard, IonCardContent,
  IonCardHeader, IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonNote,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
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
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonInput, IonButton, IonIcon, IonList, IonLabel, IonNote, IonAlert],
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
