import { Component } from '@angular/core';
import { Student } from './models/student';
import { specialties, Specialty } from './models/specialties';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'School Client';
  
  studentForm: FormGroup;

  load: boolean = false;

  student: Student = new Student();

  levels: Specialty[] = specialties;

  selectedSpecialties: string[] = [];

  changeLeve = () => this.student.specialty = this.selectedSpecialties[0];

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) {}

  // VALIDACIONES
  ngOnInit () {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      semestre: ['', Validators.required],
      enrollment: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      level: ['', Validators.required],
      specialty: ['', Validators.required],
    });
  }

  get f () {
    return this.studentForm.controls;
  }

  async addStudent() {
    if (this.studentForm.invalid)return;

    console.log(this.student);
    this.load = true;
    this.studentService.createStudent(this.student)
      .subscribe(
        res=>{
          console.log(res);

          if(res.complete) Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El estudiante ha sido registrado correctamente',
            showConfirmButton: false,
            timer: 2000
          });

          else Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'El estudiante ya habia sido registrado anteriormente',
            showConfirmButton: false,
            timer: 2000
          });
          this.load = false;
        }, err => {
          console.log(err);

          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'No se pudo establecer la conexion correctamente con el servidor',
            showConfirmButton: false,
            timer: 2000
          });
          this.load = false;
        }
      );
  }
}
