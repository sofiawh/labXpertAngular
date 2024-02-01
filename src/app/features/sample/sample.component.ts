import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {maxDateValidator} from "../../shared/utils/utils";
import {Store} from "@ngrx/store";
import {loadSamples, addSample, deleteSample} from "../../store/sample/actions/sample.actions"
import {selectError, selectSamples} from "../../store/sample/selectors/sample.selectors"
import {Patient} from "../../types/patient/patient";
import {Gender} from "../../types/patient/gender";




@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit {
  samples$ = this.store.select(selectSamples);
  error$ = this.store.select(selectError);
  sampleForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private store: Store) {
  }

  ngOnInit(): void {

    this.sampleForm = this.formBuilder.group({
      analysisType: ['', Validators.required],
      sampleDescription: ['', Validators.required],
      collectionDate: ['', [Validators.required, maxDateValidator()]],
      patientDTO: this.formBuilder.group({
        patientID: ['', Validators.required]
      })
    });

    this.store.dispatch(loadSamples());

  }

  onSubmit() {
    if (this.sampleForm.valid) {
      this.store.dispatch(addSample({sample: this.sampleForm.value}));
      this.sampleForm.reset();
    }
  }

  onDelete(id: number) {
    this.store.dispatch(deleteSample({id}));
  }

  title: string = 'Echantillons';
  paragraph: string = 'Cette page est dédiée à l\'enregistrement des échantillons. Elle comprend un composant spécifique pour l\'enregistrement des échantillons. ';
  button: string = 'ajouter un échantillon';

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
  ];
}
