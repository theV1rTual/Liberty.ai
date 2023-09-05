import {Component, ElementRef, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../../shared/modals/modal.component";
import {animate, style, transition, trigger} from "@angular/animations";
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
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
    trigger('waveAnimation', [
      transition(':enter', [
        style({ height: '0' }),
        animate('1s', style({ height: '4rem' })),
      ]),
    ]),
  ],
})

export class HeroComponent implements OnInit{
  animateWave = false;
  showImage = false;
  playStarted = false
  constructor(public dialog: MatDialog, private scrollService: ScrollService, private el: ElementRef) {}


  scrollToComponent(componentKey: string) {
    this.scrollService.scrollToComponent(componentKey);
  }


  currentIndex = 0;
  images = [
    'assets/images/hero1.svg',
    'assets/images/hero2.svg',
    'assets/images/hero3.svg',
    'assets/images/hero4.svg',
    'assets/images/hero5.svg',
  ];

  openModal() {
    this.dialog.open(ModalComponent);
  }

  ngOnInit() {


    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 200);

    setTimeout(() => {
      this.showImage = true;
    }, 1);

    setInterval(() => {
      // Update the progress to a new value between 0 and 100
      const newProgress = Math.random() * 100;
      this.updateProgress(newProgress);
    }, 1000);
  }

  playButton(): void {
    this.playStarted = true
  }

  currentProgress: number = 0; // Initialize currentProgress to 0

  // Function to update the progress
  updateProgress(newProgress: number) {
    this.currentProgress = newProgress;
  }
}

