import { Component } from '@angular/core';
import { Student } from './models/student';
import { specialties, Specialty } from './models/specialties'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-client';

  levels: Specialty[] = specialties;

  selectedSpecialties: string[] = [];
}
