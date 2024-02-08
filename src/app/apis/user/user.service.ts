import { Injectable } from '@angular/core';
import {User} from 'src/app/types/user/user';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

/**
 * User service
 * @class
 * @Author : Mariam Laghfiri
 */

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private apiUrl = 'http://localhost:9090';

  /**
   * The constructor Loaded before the ngOnInit() method
   */
  constructor(private http: HttpClient) {
  }
  // CRUD
  /*
   * The work of observable is to wait for the response from the server
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/api/v1/users');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/api/v1/users/' + id);
  }


  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/api/v1/users', user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/api/v1/users/' + id, {responseType: 'text' as 'json'});
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.apiUrl + '/api/v1/users/' + user.userID, user);
  }
}