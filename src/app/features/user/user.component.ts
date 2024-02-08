import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {loadUsers,addUser,deleteUser} from "../../store/user/actions/user.actions"
import {selectError, selectUsers} from "../../store/user/selectors/user.selectors"
import { User } from 'src/app/types/user/user';

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

  // editingUserId: number | null = null;
  isEditing: boolean = false;

  users$ = this.store.select(selectUsers);
  error$ = this.store.select(selectError);
  userForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private store: Store) {

  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required],
     // @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$", message = "Password must contain at least one digit, one lowercase, one uppercase and one special character")
      password: ['', Validators.required],
      personalInfo: ['', Validators.required],
      username: ['', Validators.required],
      userRole: ['', Validators.required],
    });

    

    this.store.dispatch(loadUsers());
    console.log("salam users", this.users$);
    // this.editingUserId = null;

    
  }

  onSubmit() {
    if (this.userForm.valid){
      console.log(this.userForm.value);
      this.store.dispatch(addUser({user: this.userForm.value}));
      this.userForm.reset();
    }
  }
  onEdit(user: User) {
    // this.editingUserId = user.userID;
    // this.userForm.patchValue({
    //   // userID: user.userID,
    //   username: user.username,
    //   email: user.email,
    //   personalInfo: user.personalInfo,
    //   userRole: user.userRole,
    //   password: user.password
    // });
  }
  
  onDelete(id: number) {
    this.store.dispatch(deleteUser({id}));
  }

  title: string = 'Utilisateurs';
  paragraph: string = 'Cette page est dédiée à l\'enregistrement des utilisateurs. Elle comprend un composant spécifique pour l\'enregistrement des utilisateurs. ';
  button: string = 'ajouter un utilisateur';
}
