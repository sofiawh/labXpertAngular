import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {loadReagents, addReagent, deleteReagent} from "../../store/reagent/actions/reagent.actions"
import {selectError, selectReagents} from "../../store/reagent/selectors/reagent.selectors"
import { Reagent } from 'src/app/types/reagent/reagent';
@Component({
  selector: 'app-reagent',
  templateUrl: './reagent.component.html',
  styleUrls: ['./reagent.component.css'],
})
export class ReagentComponent implements OnInit {

  editingReagentId: number | null = null;
  isEditing: boolean = false;

  reagents$ = this.store.select(selectReagents);
  error$ = this.store.select(selectError);
  reagentForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private store: Store) {
  }

 ngOnInit(): void {
    this.reagentForm = this.formBuilder.group({
      reagentName : ['', Validators.required],
      reagentDescription :['', Validators.required],
      expirationDate : ['', Validators.required],
      quantityInStock :['', Validators.required],
      reagentSerialNumber : ['', Validators.required],
      supplier : ['', Validators.required],
    });
    this.store.dispatch(loadReagents());
  }

  onSubmit() {
    if (this.reagentForm.valid) {
      this.store.dispatch(addReagent({reagent: this.reagentForm.value}));
      this.reagentForm.reset();
    }
  }

  onDelete(id: number) {
    this.store.dispatch(deleteReagent({id}));
  }

  title: string = 'Réactifs';
  paragraph: string = "Cette page est dédiée à l'enregistrement des Réactifs. Elle comprend un composant spécifique pour l'enregistrement des Réactifs";
  button: string = 'ajouter un Réactif';

}
