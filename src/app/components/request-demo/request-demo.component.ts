import {Component} from "@angular/core";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-request-demo',
  templateUrl: './request-demo.component.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }), // Start with zero opacity
        animate('1000ms', style({ opacity: 1 })), // Fade in over 500ms
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })), // Fade out over 500ms
      ]),
    ]),
  ],
})

export class RequestDemoComponent {
  currentIndex = 0;
  images = [
    'assets/images/hero1.svg',
    'assets/images/hero2.svg',
    'assets/images/hero3.svg',
    'assets/images/hero4.svg',
    'assets/images/hero5.svg',
  ];
  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 500);
  }
}
