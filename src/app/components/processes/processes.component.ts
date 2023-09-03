import {Component} from "@angular/core";

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html'
})

export class ProcessesComponent {
  processes = [
    {
      title: 'Customer Reactivation',
      description: 'Only $1 per Customer',
      text: 'Re-engage customers who have not purchased for an extended period by using AI-powered bots that are indistinguishable from people.'
    },
    {
      title: 'Customer Retention',
      description: '94% of Repurchase',
      text: 'Provide a seamless, personalized, multi-channel communication experience to maintain high customer retention rate.'
    },
    {
      title: 'NPS Surveys',
      description: 'Within 30 minutes',
      text: 'Quickly and efficiently collect feedback to improve your services and to maintain high quality.'
    }
  ]
}
