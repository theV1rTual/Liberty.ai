import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {ScrollService} from "../../services/scroll.service";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../../shared/modals/modal.component";

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html'
})

export class SolutionsComponent implements OnInit {
  constructor(private scrollService: ScrollService, private el: ElementRef, private dialog: MatDialog) {}

  openModal() {
    this.dialog.open(ModalComponent)
  }

  ngOnInit() {
    this.scrollService.setScrollFunction('component1', () => this.scrollToComponent());
  }

  scrollToComponent() {
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth', block : 'center'});
  }

  leftSolutions = [
    {
      image: 'assets/images/solutions1.svg',
      text: 'Implementing NPS Surveys'
    },
    {
      image: 'assets/images/solutions2.svg',
      text: 'Loyalty Programs Engagement'
    },
    {
      image: 'assets/images/solutions3.svg',
      text: 'Cart Reminder'
    },
    {
      image: 'assets/images/solutions4.svg',
      text: 'Rapid Self-Service'
    }
  ]
  rightSolutios = [
    {
      image: 'assets/images/solutions6.svg',
      text: 'Interest-Based Promos'
    },
    {
      image: 'assets/images/application1.svg',
      text: 'Tailored Updates'
    },
    {
      image: 'assets/images/application2.svg',
      text: 'Encouraging the client to take Target Action'
    },
    {
      image: 'assets/images/solutions8.svg',
      text: 'Multichannel Reach'
    }
  ]
}

