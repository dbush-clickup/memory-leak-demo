import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'demo-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnDestroy {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.addEventListener('click', () => 
      this.elementRef.nativeElement.innerHTML = this.elementRef.nativeElement.innerHTML + ' clicked');
  }
  ngOnDestroy() {
    console.log('PageComponent destroyed');
  }
}
