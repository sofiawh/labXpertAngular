import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SampleService} from 'src/app/apis/sample/sample.service';
import {Gender} from 'src/app/types/patient/gender';
import {Patient} from 'src/app/types/patient/patient';
import {Sample} from 'src/app/types/sample/sample';

/**
 * Sample component
 * @class
 * @Author : Ayoub ait si ahmad
 */
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {


  samples: Sample[] = [];
  sampleForm: FormGroup = new FormGroup({});
  showNotification: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private sampleService: SampleService) {

  }

  ngOnInit(): void {

    // Validation of inputs in the form
    // make sure that this have the same name as the formControlName in the html file and the interface
    this.sampleForm = this.formBuilder.group({
      name: ['', Validators.required],
      collectionDate: ['', Validators.required],
      analysisType: ['', Validators.required],
      sampleDescription: ['', Validators.required],
    });

    // TODO : @Ayoub I need to make more reasearch about the Observable and the subscribe
    // Get all samples
    this.sampleService.getSamples().subscribe((samples: Sample[]) => {
      this.samples = samples;
    });
  }

  // submit the form and add the sample to the list
  onSubmit() {
    if (this.sampleForm.valid) {
      let sample: Sample = this.sampleForm.value;
      this.sampleService.addSample(sample);
    }
  }

  // delete the sample from the list
  onDelete(id: number) {
    this.sampleService.deleteSample(id).subscribe(() => {
        this.samples = this.samples.filter(s => s.sampleID !== id);
      }
    );
  }

  title: string = 'Echantillons';
  paragraph: string = 'Cette page est dédiée à l\'enregistrement des échantillons. Elle comprend un composant spécifique pour l\'enregistrement des échantillons. ';
  button: string = 'ajouter un échantillon';
}
