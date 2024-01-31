import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SampleService} from 'src/app/apis/sample/sample.service';
import {Gender} from 'src/app/types/patient/gender';
import {Patient} from 'src/app/types/patient/patient';
import {Sample} from 'src/app/types/sample/sample';
import * as sampleActions from '../../store/sample/actions/sample.actions';

// import of store
import {Store} from "@ngrx/store";
import {loadSamples,loadSamplesFailure,loadSamplesSuccess} from "../../store/sample/actions/sample.actions";
import {Observable} from "rxjs";

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

  samples$: Observable<Sample[]> = this.store.select(state => state.samples);


  sampleForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private store: Store<{ samples: Sample[] }>) {

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

    this.store.dispatch(ٍٍٍٍ)
    // make a console.log to see the result
    this.samples$.subscribe((samples) => {
      console.log('hahoma jay : ', samples);
    });
    // TODO : @Ayoub I need to make more reasearch about the Observable and the subscribe
  }

  onSubmit() {
    if (this.sampleForm.valid) {
      let sample: Sample = this.sampleForm.value;
      console.log(sample);
    }
  }

  /*
    onEdit(sample: Sample) {
      this.editingSampleId = sample.sampleID;
      this.sampleForm.setValue({
        analysisType: sample.analysisType,
        sampleDescription: sample.sampleDescription,
        collectionDate: sample.collectionDate,
        patientDTO: {
          patientID: sample.patientDTO.patientID
        }
      });
    }
   */

  onDelete(id: number) {

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
