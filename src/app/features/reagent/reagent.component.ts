import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reagent',
  templateUrl: './reagent.component.html',
  styleUrls: ['./reagent.component.css']
})
export class ReagentComponent implements OnInit {

  reagentForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.reagentForm = this.formBuilder.group({
      reagentName : ['', Validators.required],
      reagentDescription :['', Validators.required],
      expirationDate : ['', Validators.required],
      quantityInStock :['', Validators.required],
      reagentSerialNumber : ['', Validators.required],
      supplier : ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.reagentForm.valid) {
      console.log('Form is valid');
    } else {
      console.log('Form is not valid');
      console.log('Form errors:', this.reagentForm.errors);
    }
  } 

  title: string = 'Réactifs';
  paragraph: string = 'Cette page est dédiée à l\'enregistrement des Réactifs. Elle comprend un composant spécifique pour l\'enregistrement des Réactifs. ';
  button: string = 'ajouter un Réactif';
}