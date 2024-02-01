import { Injectable } from '@angular/core';
import {User} from 'src/app/types/user/user';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';

/**
 * User service
 * @class
 * @Author : Mariam Laghfiri
 */

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl + '/users'; 

  /**
   * The constructor Loaded before the ngOnInit() method
   */
  constructor(private http: HttpClient) {
  }
  // CRUD
  /*
   * The work of observable is to wait for the response from the server
   */

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(user: User, id: number): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}