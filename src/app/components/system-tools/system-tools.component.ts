import {Component, ElementRef} from "@angular/core";
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-system-tools',
  templateUrl: './system-tools.component.html'
})

export class SystemToolsComponent {
  constructor(private scrollService: ScrollService, private el: ElementRef) {}

  ngOnInit() {
    this.scrollService.setScrollFunction('component6', () => this.scrollToComponent());
  }

  scrollToComponent() {
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  tools = [
    {
      image: 'assets/images/tools1.svg',
      title: 'Text Chatbots',
      text: 'Text chatbots can be effortlessly tailored to any scenario or process, enabling the use of variables for personalized messaging and follow-up communications post-call. Engage your customers through various channels such as WhatsApp, Email, and SMS.'
    },
    {
      image: 'assets/images/tools2.svg',
      title: 'Voice robots',
      text: 'Handle outbound and inbound calls using our Human-like AI bots, utilizing pre-recorded voices , speech synthesis, and Natural Language Understanding, ensuring authentic and personalized communication with your customers.'
    },
    {
      image: 'assets/images/tools3.svg',
      title: 'Contact center',
      text: 'Configure incoming and outgoing calls for immediate processing, minimize downtime, and establish efficient routing where communication with a manager is required, thereby optimizing the overall communication process with your customers.'
    },
  ]

  options = [
    {
      name: 'Retail',
      active: true
    }
  ]
}
