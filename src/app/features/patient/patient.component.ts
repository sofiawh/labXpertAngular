import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from 'src/app/apis/patient/patient.service';
import {Patient} from 'src/app/types/patient/patient';
import {Store} from "@ngrx/store";
import {addPatient, deletePatient, updatePatient} from "../../store/patient/actions/patient.actions";
import {Sample} from "../../types/sample/sample";
import {Gender} from "../../types/patient/gender";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  editingPatientId: number | null = null;
  patients: Patient[] = [];
  patientForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private patientService: PatientService,
              private store: Store<{ patients: Patient[] }>) {

  }

  ngOnInit(): void {

    this.patientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      patientEmail: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      phoneNumber: ['', Validators.required],

    });
    // // TODO : @Ayoub I need to make more reasearch about the Observable and the subscribe
    // this.patientService.getPatients().subscribe((patients: Patient[]) => {
    //   this.patients = patients;
    // });
    //
    // this.patientService.getPatients().subscribe((patients: Patient[]) => {
    //   this.patients = patients;
    // });

  }

  addPatient(patient: Patient) {
  this.store.dispatch(addPatient({patient: this.patientForm.value}));
}
  onSubmit() {
    if (this.patientForm.valid) {
      let patient: Patient = this.patientForm.value;
      if (this.editingPatientId) {
        patient.patientID = this.editingPatientId;
        this.patientService.updatePatient(patient).subscribe((updatedPatient: Patient) => {
          this.patients = this.patients.map(p => p.patientID === updatedPatient.patientID ? updatedPatient : p);
          this.editingPatientId = null;
          this.patientForm.reset();
        });
      } else {
        this.store.dispatch(addPatient({patient: patient}));
        this.patientService.addPatient(patient).subscribe((newPatient: Patient) => {
          this.patients.push(newPatient);
        });
        this.patientForm.reset();
      }
    }
  }

  onEdit(patient: Patient) {
    this.editingPatientId = patient.patientID;
    this.patientForm.setValue({
      firstName: patient.firstName,
      lastName: patient.lastName,
      patientEmail: patient.patientEmail,
      dateOfBirth: patient.dateOfBirth,
      gender: patient.gender,
      address: patient.address,
      phoneNumber: patient.phoneNumber
    });
  }


  onDelete(id: number) {
    this.patientService.deletePatient(id).subscribe(() => {
        this.patients = this.patients.filter(p => p.patientID !== id);
      }
    );
  }

  title: string = 'Patients';
  paragraph: string = 'Cette page est dédiée à l\'enregistrement des patients. Elle comprend un composant spécifique pour l\'enregistrement des patients. ';
  button: string = 'ajouter un patient';
/*
  patients: Patient[] = [
    {
      patientID: 2,
      address: 'address',
      dateOfBirth: new Date(),
      firstName: 'ait si ahmad',
      gender: Gender.MALE,
      lastName: 'ayoub',
      patientEmail: 'test@gmail.com',
      phoneNumber: '0600000000'
    },
    {
      patientID: 1,
      address: 'address',
      dateOfBirth: new Date(),
      firstName: 'ilyas',
      gender: Gender.MALE,
      lastName: 'ayoub',
      patientEmail: 'ilyas@gmail.com',
      phoneNumber: '0600000000'
    },
  ];*/
}
