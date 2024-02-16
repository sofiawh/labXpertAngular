import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../apis/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(public authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

}
