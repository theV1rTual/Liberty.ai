import {Component} from "@angular/core";

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html'
})

export class SolutionsComponent {
  leftSolutions = [
    {
      image: 'assets/images/solutions1.svg',
      text: 'Appointment and confirmation of appointments/meetings'
    },
    {
      image: 'assets/images/solutions2.svg',
      text: 'Retrying a sale to previously disclaimed customers'
    },
    {
      image: 'assets/images/solutions3.svg',
      text: 'Cold selling and telemarketing'
    },
    {
      image: 'assets/images/solutions4.svg',
      text: 'Informing about promotions'
    }
  ]
  rightSolutios = [
    {
      image: 'assets/images/solutions6.svg',
      text: 'Replacing SMS mailings with auto funnels with AI and robots'
    },
    {
      image: 'assets/images/solutions6.svg',
      text: 'Collecting feedback on the provided services'
    },
    {
      image: 'assets/images/solutions7.svg',
      text: 'Encouraging the client to take the target action'
    },
    {
      image: 'assets/images/solutions8.svg',
      text: 'Cross selling and upsells'
    }
  ]
}

