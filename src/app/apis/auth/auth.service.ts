import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {jwtDecode} from "jwt-decode";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated : boolean =false;
  roles : any;
  username : any;
  accessToken!: any;

  constructor(private http:HttpClient, private router : Router) { }

  public login(username : string, password : string){
    let options = {
      headers : new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
      }
      let params=new HttpParams()
        .set("username", username).set("password",password).set("grantType","password");
    return this.http.post("http://localhost:9090/token", params, options)
  }

  loadProfile(data: any) {
    this.isAuthenticated=true;
    console.log('Réponse du serveur complète :', data);
    this.accessToken = data['accessToken']

    // Ajoutez un log pour vérifier la valeur du token
    console.log('Token reçu :', this.accessToken);

    try {
      let decodedJwt: any = jwtDecode(this.accessToken);

      // Ajoutez un log pour vérifier le contenu décodé
      console.log('JWT décodé :', decodedJwt);

      this.username = decodedJwt.sub;
      this.roles = decodedJwt.scope
      console.log('ROLES AUTHHH :',this.roles)
      window.localStorage.setItem("jwt-token",this.accessToken);
    } catch (error) {
      console.error('Erreur lors du décodage du JWT :', error);
    }
  //  let decodedJwt:any = jwtDecode(this.accessToken);
  //  this.username = decodedJwt.sub;
  //  this.roles = decodedJwt.scope;
  }

  logout() {
    this.isAuthenticated=false;
    this.accessToken=undefined;
    this.username=undefined;
    this.roles=undefined;
    window.localStorage.removeItem("access-token");
    this.router.navigateByUrl("/login")

  }

  loadJwtTokenFromLocalStorage() {
    let token = window.localStorage.getItem("jwt-token");
    if(token){
      this.loadProfile({"access-token" : token});
      this.router.navigateByUrl("/admin/patient");
    }

  }
}