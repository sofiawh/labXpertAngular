import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
//import {selectError, selectPatients} from "../../store/patient/selectors/patient.selectors";
import {Store} from "@ngrx/store";
import {selectError, selectSchedulings} from "../../store/scheduling/selectors/scheduling.selectors"
import {Scheduling} from "../../types/scheduling/scheduling";
import {addScheduling, deleteScheduling, editScheduling, loadSchedulings} from "../../store/scheduling/actions/scheduling.actions";
import {Patient} from "../../types/patient/patient";

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {

  editingSchedulingId: number | null = null;
  isEditing: boolean = false;

  schedulings$ = this.store.select(selectSchedulings);
  error$ = this.store.select(selectError);

  schedulingForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private store: Store) {
  }
  ngOnInit(): void {

    this.store.select(selectSchedulings).subscribe(schedulings => console.log('Schedulings in component:', schedulings));

    this.schedulingForm = this.formBuilder.group({
      endDateAndTime: ['', Validators.required],
      notes: ['', Validators.required],
      priority: ['', Validators.required],
      //schedulingID	integer($int64)
      startDateAndTime: ['', Validators.required],
      //analysisDTO
      //userDTO
    });

    this.store.dispatch(loadSchedulings());
    this.store.select(selectSchedulings).subscribe(schedulings => console.log('Schedulings:', schedulings));
    this.store.select(selectError).subscribe(error => console.log('Error:', error));
    this.store.dispatch(loadSchedulings());
  }

  onSubmit() {
    if (this.schedulingForm.valid) {
      const formData = this.schedulingForm.value;

      if (this.isEditing) {
        // Si c'est une édition, utilisez l'action editPatient
        this.store.dispatch(editScheduling({scheduling: {...formData, schedulingId: this.editingSchedulingId}}));
      } else {
        // Sinon, c'est une ajout, utilisez l'action addPatient
        this.store.dispatch(addScheduling({scheduling: formData}));
      }
      // Réinitialisez le formulaire après l'ajout ou la modification
      this.schedulingForm.reset();
      this.isEditing = false;
      this.editingSchedulingId = null;
    }
  }
      onDelete(id: number) {
        this.store.dispatch(deleteScheduling({id}));
      }

      onEditForm(scheduling: Scheduling) {
        this.editingSchedulingId = scheduling.schedulingID;
        this.schedulingForm.setValue({
          // patientID: patient.patientID,
          endDateAndTime: scheduling.endDateAndTime,
          notes: scheduling.notes,
          priority: scheduling.priority,
          startDateAndTime: scheduling.startDateAndTime
        });


      // Réinitialisez le formulaire après l'ajout ou la modification
      this.schedulingForm.reset();
      this.isEditing = false;
      this.editingSchedulingId = null;
}


  title: string = 'Plannifications';
  paragraph: string = 'Cette page est dédiée à l\'enregistrement des plannifications. Elle comprend un composant spécifique pour l\'enregistrement des plannifications. ';
  button: string = 'ajouter une plannification';
}

