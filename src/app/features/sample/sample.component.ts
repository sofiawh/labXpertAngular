import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {loadSamples,addSample,deleteSample} from "../../store/sample/actions/sample.actions"
import {selectError, selectSamples} from "../../store/sample/selectors/sample.selectors"
import {Patient} from "../../types/patient/patient";
import {Sample} from "../../types/sample/sample";
import {Gender} from "../../types/patient/gender";

/**
 * Sample component
 * @class
 * @Author : Ayoub ait si ahmad
 */
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit {
  // define the variables
  samples$ = this.store.select(selectSamples);
  error$ = this.store.select(selectError);
  sampleForm: FormGroup = new FormGroup({});

  // inject the dependencies
  constructor(private formBuilder: FormBuilder,
              private store: Store) {

  }

  // define the methods
  ngOnInit(): void {
    // validate the form
    this.sampleForm = this.formBuilder.group({
      analysisType: ['', Validators.required],
      sampleDescription: ['', Validators.required],
      collectionDate: ['', Validators.required],
      patientDTO: this.formBuilder.group({
        patientID: ['', Validators.required]
      })
    });

    // load the samples
    this.store.dispatch(loadSamples());
  }

  // submit the form
  onSubmit() {
    if (this.sampleForm.valid) {
      // pass the form value to the action
      this.store.dispatch(addSample({sample: this.sampleForm.value}));
      this.sampleForm.reset();
      // TODO : @Ayoub ait si ahmad : I SHOULD FIX THIS
      document.getElementById('closeModal')?.click();
    }
  }

  // delete the sample
  onDelete(id: number) {
    this.store.dispatch(deleteSample({id}));
    console.log(id);
  }

  // define the variables
  title: string = 'Echantillons';
  paragraph: string = 'Cette page est dédiée à l\'enregistrement des échantillons. Elle comprend un composant spécifique pour l\'enregistrement des échantillons. ';
  button: string = 'ajouter un échantillon';

  // TODO : @Ayoub ait si ahmad : WHEN THE PATIENTS WILL BE READY I SHOULD FIX THIS @Sofia
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
