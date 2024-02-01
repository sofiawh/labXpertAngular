import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent implements OnInit {

  @Input() toastId: string = '';
  @Input() toastType: 'success' | 'danger' | 'warning' = 'success';
  @Input() toastMessage: string = '';
  @Input() toastIcon: boolean = true;

  get iconContainerClass(): string {
    // Adjust the icon container class based on the toast type
    return this.toastType === 'success'
      ? 'text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'
      : this.toastType === 'danger'
        ? 'text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200'
        : this.toastType === 'warning'
          ? 'text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200'
          : '';
  }

  constructor() {}

  ngOnInit(): void {}

  dismissToast() {
    // Implement the logic to dismiss the toast here
    console.log(`Dismissed toast with ID: ${this.toastId}`);
  }

}
