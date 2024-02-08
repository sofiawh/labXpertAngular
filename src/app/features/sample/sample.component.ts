import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {loadSamples, addSample, deleteSample} from "../../store/sample/actions/sample.actions"
import {selectError, selectSamples} from "../../store/sample/selectors/sample.selectors"
import { selectPatients } from 'src/app/store/patient/selectors/patient.selectors';
import { loadPatients } from 'src/app/store/patient/actions/patient.actions';
import {Patient} from "../../types/patient/patient";
import {Gender} from "../../types/patient/gender";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit {
  patients$ = this.store.select(selectPatients);
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
      collectionDate: ['', Validators.required],
      patientDTO: this.formBuilder.group({
        patientID: ['', Validators.required]
      })
    });

    this.store.dispatch(loadSamples());
    this.store.dispatch(loadPatients());
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

  
}
