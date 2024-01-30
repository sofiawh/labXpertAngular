import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' | 'info' = 'success';
  @Input() show: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    if (this.show) {
      setTimeout(() => {
        this.show = false;
      }, 3000);
    }
  }

}
