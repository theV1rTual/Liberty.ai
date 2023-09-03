import {Component} from "@angular/core";

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html'
})

export class SolutionsComponent {
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
      image: 'assets/images/solutions6.svg',
      text: 'Tailored Updates'
    },
    {
      image: 'assets/images/solutions7.svg',
      text: 'Encouraging the client to take Target Action'
    },
    {
      image: 'assets/images/solutions8.svg',
      text: 'Multichannel Reach'
    }
  ]
}

