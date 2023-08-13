import {Component} from "@angular/core";

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html'
})

export class ProcessesComponent {
  processes = [
    {
      title: 'Sales and marketing',
      description: 'Up to +200%',
      text: 'We increase sales with automation of marketing and sales processes (client base operations, cold calling, processing requests and applications, informing about promotions, conducting surveys, etc.)'
    },
    {
      title: 'Stimulation for action',
      description: 'Up to +20%',
      text: 'We enhance conversion rate to target action with automation of confirmation receipts and stimulate client actions (invoice payment, office attendance, picking up parcels, etc.)'
    },
    {
      title: 'HR & Recruitment',
      description: 'Up to +80%',
      text: 'We save HR department time with automation of massive recruiting processses and improve internal HR team communication'
    }
  ]
}
