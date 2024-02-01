import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import * as UserActions from 'src/app/store/user/actions/user.actions';
import { User } from "src/app/types/user/user";
import { selectUsers } from 'src/app/store/user/selectors/user.selector';
import { UserService } from 'src/app/apis/user/user.service'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users$: Observable<User[]>;
  userForm: FormGroup = new FormGroup({});

  constructor(private store: Store<{ users: User[] }>, 
              private formBuilder: FormBuilder,
              private userService: UserService) 
  {
    this.users$ = this.store.select(selectUsers);
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required,Validators.email],
     // @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$", message = "Password must contain at least one digit, one lowercase, one uppercase and one special character")

      password: ['', Validators.required,Validators.pattern],
      personalInfo: ['', Validators.required],
      username: ['', Validators.required],
      userRole: ['', Validators.required],
    });  }

  // Implement methods to dispatch create, update, delete actions
  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      this.userService.createUser(newUser).subscribe(
        createdUser => {
          // Dispatch the create user action with the new user data
          this.store.dispatch(UserActions.createUser({ user: createdUser }));
          // Optionally, reset the form after successful submission
          this.userForm.reset();
        },
        error => {
          // Handle error, e.g., display a message to the user
          console.error('Error creating user:', error);
        }
      );
    }
  }

  onEdit(user: User): void {
    // Assuming you have a method to retrieve updated user data from the form
    const updatedUserData: User = this.getUpdatedUserDataFromForm(); 
  
    this.userService.updateUser(updatedUserData, user.userId).subscribe(
      updatedUser => {
        this.store.dispatch(UserActions.updateUser({ userId: user.userId, updatedUser }));
      },
      error => {
        // Handle error, e.g., display a message to the user
        console.error('Error updating user:', error);
      }
    );
  }
  
  private getUpdatedUserDataFromForm(): User {
    // Implement logic to retrieve updated user data from the form
    return {
      username: this.userForm.get('username').value,
      email: this.userForm.get('email').value,
      password: this.userForm.get('password').value,
      userRole: this.userForm.get('userRole').value,
      personalInfo: this.userForm.get('personalInfo').value
    };
  }
  

  onDelete(userId: number): void {
    // Dispatch the delete user action with the user ID
    this.userService.deleteUser(userId).subscribe(
      () => {
        this.store.dispatch(UserActions.deleteUser({ userId }));
      },
      error => {
        // Handle error, e.g., display a message to the user
        console.error('Error deleting user:', error);
      }
    );
  }
  
  title: string = 'Utilisateur';
  paragraph: string = 'Cette page est dédiée à l\'enregistrement des utilisateurs. Elle comprend un composant spécifique pour l\'enregistrement des utilisateurs. ';
  button: string = 'ajouter un utilisateur';
}