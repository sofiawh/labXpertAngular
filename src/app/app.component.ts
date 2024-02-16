import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import {AuthService} from "./apis/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-app';
  constructor(private authService : AuthService) {

  }
  ngOnInit(): void {
    this.authService.loadJwtTokenFromLocalStorage();
    initFlowbite();

  }
}
