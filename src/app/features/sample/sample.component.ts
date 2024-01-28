import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  sampleForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.sampleForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.sampleForm.valid) {
      console.log('Form is valid');
    } else {
      console.log('Form is not valid');
      console.log('Form errors:', this.sampleForm.errors);
    }
  }

  title: string = 'Echantillons';
  paragraph: string = 'Cette page est dédiée à l\'enregistrement des échantillons. Elle comprend un composant spécifique pour l\'enregistrement des échantillons. ';
  button: string = 'ajouter un échantillon';
}
