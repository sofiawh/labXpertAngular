import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {loadPatients, addPatient, deletePatient, editPatient} from "../../store/patient/actions/patient.actions"
import {selectError, selectPatients} from "../../store/patient/selectors/patient.selectors"
import {Patient} from "../../types/patient/patient";
import {Gender} from "../../types/patient/gender";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  editingPatientId: number | null = null;
  isEditing: boolean = false;
//   patients: Patient[] = [];

  patients$ = this.store.select(selectPatients);
  error$ = this.store.select(selectError);

  patientForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private store: Store) {
  }

  ngOnInit(): void {
    this.store.select(selectPatients).subscribe(patients => console.log('Patients in component:', patients));

        this.patientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      patientEmail: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      phoneNumber: ['', Validators.required]



    });
    this.store.dispatch(loadPatients());
    this.store.select(selectPatients).subscribe(patients => console.log('Patients:', patients));
    this.store.select(selectError).subscribe(error => console.log('Error:', error));
    this.store.dispatch(loadPatients());
  }

  onSubmit() {
    if (this.patientForm.valid) {
      const formData = this.patientForm.value;

      if (this.isEditing) {
        // Si c'est une édition, utilisez l'action editPatient
        this.store.dispatch(editPatient({ patient: {...formData, patientId: this.editingPatientId }}));
      } else {
        // Sinon, c'est une ajout, utilisez l'action addPatient
        this.store.dispatch(addPatient({ patient: formData }));
      }

      // Réinitialisez le formulaire après l'ajout ou la modification
      this.patientForm.reset();
      this.isEditing = false;
      this.editingPatientId = null;
    // console.log("this.patientForm.value*****" + JSON.stringify(this.patientForm.value));    if (this.patientForm.valid) {
    //   this.store.dispatch(addPatient({patient: this.patientForm.value}));
    //   this.patientForm.reset();
    }
  }
/*
  onEdit(patient: Patient) {
    this.store.dispatch(editPatient({ patient }));
  }*/

  onDelete(id: number) {
    this.store.dispatch(deletePatient({id}));
  }

    onEditForm(patient: Patient) {

    this.editingPatientId = patient.patientID;
    this.patientForm.patchValue/*setValue*/({
     // patientID: patient.patientID,
      firstName: patient.firstName,
      lastName: patient.lastName,
      patientEmail: patient.patientEmail,
      dateOfBirth: patient.dateOfBirth,
      gender: patient.gender,
      address: patient.address,
      phoneNumber: patient.phoneNumber
    });
      this.isEditing= true;
      console.log("onEditForm******"+this.isEditing)
  }


  title: string = 'Patients';
  paragraph: string = 'Cette page est dédiée à l\'enregistrement des patients. Elle comprend un composant spécifique pour l\'enregistrement des patients. ';
  button: string = 'ajouter un patient';

  // patients: Patient[] = [
  //   {
  //     patientID: 5,
  //     address: 'address',
  //     dateOfBirth: new Date(),
  //     firstName: 'ait si ahmad',
  //     gender: Gender.MALE,
  //     lastName: 'ayoub',
  //     patientEmail: 'test@gmail.com',
  //     phoneNumber: '0600000000'
  //   },
  //   {
  //     patientID: 6,
  //     address: 'address',
  //     dateOfBirth: new Date(),
  //     firstName: 'ilyas',
  //     gender: Gender.MALE,
  //     lastName: 'ayoub',
  //     patientEmail: 'ilyas@gmail.com',
  //     phoneNumber: '0600000000'
  //   },
  // ];
}




// import {Component, OnInit} from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import {PatientService} from 'src/app/apis/patient/patient.service';
// import {Patient} from 'src/app/types/patient/patient';
// import {Store} from "@ngrx/store";
// import {addPatient, deletePatient, updatePatient} from "../../store/patient/actions/patient.actions";
// import {Sample} from "../../types/sample/sample";
// import {Gender} from "../../types/patient/gender";
//
// @Component({
//   selector: 'app-patient',
//   templateUrl: './patient.component.html',
//   styleUrls: ['./patient.component.css']
// })
// export class PatientComponent implements OnInit {
//
//   editingPatientId: number | null = null;
//   patients: Patient[] = [];
//   patientForm: FormGroup = new FormGroup({});
//
//   constructor(private formBuilder: FormBuilder,
//               private patientService: PatientService,
//               private store: Store<{ patients: Patient[] }>) {
//
//   }
//
//   ngOnInit(): void {
//
//     this.patientForm = this.formBuilder.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       patientEmail: ['', Validators.required],
//       gender: ['', Validators.required],
//       address: ['', Validators.required],
//       dateOfBirth: ['', Validators.required],
//       phoneNumber: ['', Validators.required],
//
//     });
//     // // TODO : @Ayoub I need to make more reasearch about the Observable and the subscribe
//     // this.patientService.getPatients().subscribe((patients: Patient[]) => {
//     //   this.patients = patients;
//     // });
//     //
//     // this.patientService.getPatients().subscribe((patients: Patient[]) => {
//     //   this.patients = patients;
//     // });
//
//   }
//
//   addPatient(patient: Patient) {
//   this.store.dispatch(addPatient({patient: this.patientForm.value}));
// }
//   onSubmit() {
//     if (this.patientForm.valid) {
//       let patient: Patient = this.patientForm.value;
//       if (this.editingPatientId) {
//         patient.patientID = this.editingPatientId;
//         this.patientService.updatePatient(patient).subscribe((updatedPatient: Patient) => {
//           this.patients = this.patients.map(p => p.patientID === updatedPatient.patientID ? updatedPatient : p);
//           this.editingPatientId = null;
//           this.patientForm.reset();
//         });
//       } else {
//         this.store.dispatch(addPatient({patient: patient}));
//         this.patientService.addPatient(patient).subscribe((newPatient: Patient) => {
//           this.patients.push(newPatient);
//         });
//         this.patientForm.reset();
//       }
//     }
//   }
//
//   onEdit(patient: Patient) {
//     this.editingPatientId = patient.patientID;
//     this.patientForm.setValue({
//       firstName: patient.firstName,
//       lastName: patient.lastName,
//       patientEmail: patient.patientEmail,
//       dateOfBirth: patient.dateOfBirth,
//       gender: patient.gender,
//       address: patient.address,
//       phoneNumber: patient.phoneNumber
//     });
//   }
//
//
//   onDelete(id: number) {
//     this.patientService.deletePatient(id).subscribe(() => {
//         this.patients = this.patients.filter(p => p.patientID !== id);
//       }
//     );
//   }
//
//   title: string = 'Patients';
//   paragraph: string = 'Cette page est dédiée à l\'enregistrement des patients. Elle comprend un composant spécifique pour l\'enregistrement des patients. ';
//   button: string = 'ajouter un patient';
// /*
//   patients: Patient[] = [
//     {
//       patientID: 2,
//       address: 'address',
//       dateOfBirth: new Date(),
//       firstName: 'ait si ahmad',
//       gender: Gender.MALE,
//       lastName: 'ayoub',
//       patientEmail: 'test@gmail.com',
//       phoneNumber: '0600000000'
//     },
//     {
//       patientID: 1,
//       address: 'address',
//       dateOfBirth: new Date(),
//       firstName: 'ilyas',
//       gender: Gender.MALE,
//       lastName: 'ayoub',
//       patientEmail: 'ilyas@gmail.com',
//       phoneNumber: '0600000000'
//     },
//   ];*/
// }
