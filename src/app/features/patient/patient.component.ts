import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      patientEmail: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      phoneNumber: ['', Validators.required],

    });
  }

  onSubmit() {
    if (this.patientForm.valid) {
      console.log('Form is valid');
    } else {
      console.log('Form is not valid');
      console.log('Form errors:', this.patientForm.errors);
    }
  }

  title: string = 'Patients';
  paragraph: string = 'Cette page est dédiée à l\'enregistrement des patients. Elle comprend un composant spécifique pour l\'enregistrement des patients. ';
  button: string = 'ajouter un patient';
}

