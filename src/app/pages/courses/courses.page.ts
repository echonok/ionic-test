import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { addOutline, closeOutline } from 'ionicons/icons';
import { IonicModule } from '@ionic/angular';

interface ICourse {
  name: string;
  rating: number;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
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
