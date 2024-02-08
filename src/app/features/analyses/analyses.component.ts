import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { loadAnalysis} from "../../store/analysis/actions/analysis.actions"
import { selectError, selectAnalysis } from "../../store/analysis/selectors/analysis.selectors"

@Component({
  selector: 'app-analyses',
  templateUrl: './analyses.component.html',
  styleUrls: ['./analyses.component.css']
})
export class AnalysesComponent implements OnInit {
  analysis$ = this.store.select(selectAnalysis);
  error$ = this.store.select(selectError);
  analysisForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private store: Store) {
  }

  ngOnInit(): void {
    this.analysisForm = this.formBuilder.group({
      analysisType: ['', Validators.required],
      analysisDescription: ['', Validators.required],
      collectionDate: ['', Validators.required],
      patientDTO: this.formBuilder.group({
        patientID: ['', Validators.required]
      })
    });

    this.store.dispatch(loadAnalysis());
  }
  title: string = 'Analyses';
}
