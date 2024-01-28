import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title: string = '';

  constructor(public router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Set the title based on the activated route
      this.setTitleFromRoute(this.activatedRoute);
    });
  }

  private setTitleFromRoute(route: ActivatedRoute): void {
    if (route.firstChild) {
      this.setTitleFromRoute(route.firstChild);
    }else {
      this['title'] = route.snapshot.data['title'] || '';
    }
  }
}
