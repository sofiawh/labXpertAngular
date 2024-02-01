import {Directive, Input, ElementRef, Renderer2, OnChanges, SimpleChanges} from '@angular/core';
import {SampleStatus} from 'src/app/types/sample/sample-status';

@Directive({
  selector: '[appSampleStatusColor]'
})
export class SampleStatusColorDirective implements OnChanges {

  @Input() appSampleStatusColor: SampleStatus | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appSampleStatusColor']) {
      this.updateBackgroundColor();
    }
  }

  private previousClass = '';

  private updateBackgroundColor() {
    const status = this.appSampleStatusColor;

    let bgColorClass = '';

    switch (status) {
      case SampleStatus.PENDING:
        bgColorClass = 'bg-pink-50';
        break;
      case SampleStatus.IN_ANALYSIS:
        bgColorClass = 'bg-blue-50';
        break;
      case SampleStatus.COMPLETED:
        bgColorClass = 'bg-green-50';
        break;
      default:
        bgColorClass = ''; // Default or fallback color
        break;
    }

    // Remove the previous class if it exists
    if (this.previousClass) {
      this.renderer.removeClass(this.el.nativeElement, this.previousClass);
    }

    // Add the new class
    this.renderer.addClass(this.el.nativeElement, bgColorClass);

    // Update the previous class
    this.previousClass = bgColorClass;
  }
}
