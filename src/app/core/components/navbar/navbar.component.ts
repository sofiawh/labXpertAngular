import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../apis/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService : AuthService, private route : Router) { }

  ngOnInit(): void {
  }

  handleLogout() {
    this.authService.logout();
   // this.route.navigateByUrl("/login");
  }
}
