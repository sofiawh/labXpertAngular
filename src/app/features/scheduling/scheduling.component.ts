import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {

  schedulingForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.schedulingForm = this.formBuilder.group({
      endDateAndTime: ['', Validators.required],
      notes: ['', Validators.required],
      priority: ['', Validators.required],
      //schedulingID	integer($int64)
      startDateAndTime: ['', Validators.required],
      //analysisDTO
      //userDTO
    });
  }

  onSubmit() {
    if (this.schedulingForm.valid) {
      console.log('Form is valid');
    } else {
      console.log('Form is not valid');
      console.log('Form errors:', this.schedulingForm.errors);
    }
  }

  title: string = 'Plannifications';
  paragraph: string = 'Cette page est dédiée à l\'enregistrement des plannifications. Elle comprend un composant spécifique pour l\'enregistrement des plannifications. ';
  button: string = 'ajouter une plannification';
}

