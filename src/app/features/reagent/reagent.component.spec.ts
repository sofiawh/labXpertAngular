import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReagentComponent } from './reagent.component';

describe('ReagentComponent', () => {
  let component: ReagentComponent;
  let fixture: ComponentFixture<ReagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReagentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
