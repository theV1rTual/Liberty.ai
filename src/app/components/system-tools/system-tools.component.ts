import {Component} from "@angular/core";

@Component({
  selector: 'app-system-tools',
  templateUrl: './system-tools.component.html'
})

export class SystemToolsComponent {
  tools = [
    {
      image: 'assets/images/tools1.svg',
      title: 'Text Chatbots',
      text: 'For your scenario, robots are configured that are indistinguishable from managers and can communicate with the client in one of the popular messengers '
    },
    {
      image: 'assets/images/tools2.svg',
      title: 'Voice robots',
      text: 'Automatic call processing, difficult to distinguish from managers by voice robots, is 10 times cheaper than live managers.'
    },
    {
      image: 'assets/images/tools3.svg',
      title: 'Contact center',
      text: 'Configure incoming and outgoing calls for live processing, reduce downtime and configure routing. So where communication with the manager is needed.'
    },
  ]

  options = [
    {
      name: 'HR and Recruiting',
      active: false
    },
    {
      name: 'Insurance',
      active: false
    },
    {
      name: 'Taxi depots',
      active: true
    }
  ]
}
