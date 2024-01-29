import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required,Validators.email],
     // @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$", message = "Password must contain at least one digit, one lowercase, one uppercase and one special character")

      password: ['', Validators.required,Validators.pattern],
      personalInfo: ['', Validators.required],
      username: ['', Validators.required],
      userRole: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form is valid');
    } else {
      console.log('Form is not valid');
      console.log('Form errors:', this.userForm.errors);
    }
  } 

  title: string = 'Utilisateur';
  paragraph: string = 'Cette page est dédiée à l\'enregistrement des utilisateurs. Elle comprend un composant spécifique pour l\'enregistrement des utilisateurs. ';
  button: string = 'ajouter un utilisateur';
}
