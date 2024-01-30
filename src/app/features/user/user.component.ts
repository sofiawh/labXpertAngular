import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from 'src/app/apis/user/user.service';
import {UserRole} from 'src/app/types/user/user-role';
import {User} from 'src/app/types/user/user';

// // import of store
// import {Store} from "@ngrx/store";
// import {addSample, deleteSample, updateSample} from "../../store/user/actions/user.actions";

/**
 * User component
 * @class
 * @Author : Mariam Laghfiri
 */

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});

  editingUserId: number | null = null;
  users: User[] = [];

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private store: Store<{ users: User[] }>) {

    // TODO : @Ayoub I need to make more reasearch about the Observable and the subscribe
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  // constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required,Validators.email],
      password: ['', Validators.required, Validators.pattern('/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/')],
      personalInfo: ['', Validators.required],
      username: ['', Validators.required],
      userRole: ['', Validators.required],
    });
  }

  // addUser(user: User) {
  //   this.store.dispatch(addUser({user: this.userForm.value}));
  // }

  onSubmit() {
    if (this.userForm.valid) {
      let user: User = this.userForm.value;
      if (this.editingUserId) {
        user.userId = this.editingUserId;
        this.userService.updateUser(user).subscribe((updatedUser: User) => {
          this.users = this.users.map(s => s.userId === updatedUser.userId ? updatedUser : s);
          this.editingUserId = null;
          this.userForm.reset();
        });
      } else {
        this.store.dispatch(addUser({user: user}));
        this.userService.addUser(user).subscribe((newUser: User) => {
          this.users.push(newUser);
        });
        this.userForm.reset();
      }
    }
  }

  onEdit(user: User) {
    this.editingUserId = user.userId;
    this.userForm.setValue({
      analysisType: user.analysisType,
      userDescription: user.userDescription,
      collectionDate: user.collectionDate,
      patientDTO: {
        patientID: user.patientDTO.patientID
      }
    });
  }

  title: string = 'Utilisateur';
  paragraph: string = 'Cette page est dédiée à l\'enregistrement des utilisateurs. Elle comprend un composant spécifique pour l\'enregistrement des utilisateurs. ';
  button: string = 'ajouter un utilisateur';
}


export class UserComponenlt implements OnInit {

  onEdit(user: User) {
    this.editingUserId = user.userId;
    this.userForm.setValue({
      analysisType: user.analysisType,
      userDescription: user.userDescription,
      collectionDate: user.collectionDate,
      patientDTO: {
        patientID: user.patientDTO.patientID
      }
    });
  }


  onDelete(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
        this.users = this.users.filter(s => s.userID !== id);
      }
    );
  }

  title: string = 'Echantillons';
  paragraph: string = 'Cette page est dédiée à l\'enregistrement des échantillons. Elle comprend un composant spécifique pour l\'enregistrement des échantillons. ';
  button: string = 'ajouter un échantillon';

  patients: Patient[] = [
    {
      patientID: 2,
      address: 'address',
      dateOfBirth: new Date(),
      firstName: 'ait si ahmad',
      gender: Gender.MALE,
      lastName: 'ayoub',
      patientEmail: 'test@gmail.com',
      phoneNumber: '0600000000'
    },
    {
      patientID: 1,
      address: 'address',
      dateOfBirth: new Date(),
      firstName: 'ilyas',
      gender: Gender.MALE,
      lastName: 'ayoub',
      patientEmail: 'ilyas@gmail.com',
      phoneNumber: '0600000000'
    },
  ];
}