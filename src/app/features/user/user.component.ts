import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {loadUsers,addUser,deleteUser} from "../../store/user/actions/user.actions"
import {selectError, selectUsers} from "../../store/user/selectors/user.selectors"
import {User} from "../../types/user/user";

/**
 * User component
 * @class
 * @Author : Mariam Laghfiri
 */
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // define the variables
  users$ = this.store.select(selectUsers);
  error$ = this.store.select(selectError);
  userForm: FormGroup = new FormGroup({});

  // inject the dependencies
  constructor(private formBuilder: FormBuilder,
              private store: Store) {

  }

  // define the methods
  ngOnInit(): void {
    // validate the form
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required,Validators.email],
     // @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$", message = "Password must contain at least one digit, one lowercase, one uppercase and one special character")
      password: ['', Validators.required,Validators.pattern],
      personalInfo: ['', Validators.required],
      username: ['', Validators.required],
      userRole: ['', Validators.required],
    });

    // load the users
    this.store.dispatch(loadUsers());
  }

  // submit the form
  onSubmit() {
    if (this.userForm.valid) {
      // pass the form value to the action
      this.store.dispatch(addUser({user: this.userForm.value}));
      this.userForm.reset();
      // TODO : @Ayoub ait si ahmad : I SHOULD FIX THIS
      document.getElementById('closeModal')?.click();
    }
  }

  // delete the user
  onDelete(id: number) {
    this.store.dispatch(deleteUser({id}));
    console.log(id);
  }

  // define the variables
  title: string = 'Utilisateurs';
  paragraph: string = 'Cette page est dédiée à l\'enregistrement des utilisateurs. Elle comprend un composant spécifique pour l\'enregistrement des utilisateurs. ';
  button: string = 'ajouter un utilisateur';
}
