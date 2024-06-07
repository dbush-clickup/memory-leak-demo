import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewEncapsulation, OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'demo-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnDestroy, OnInit {
  constructor() {}

  ngOnInit() {
    interval(1000).subscribe(() => {
      console.log('PageComponent initialized');      
    });
  }

  ngOnDestroy() {
    console.log('PageComponent destroyed');
  }
}
