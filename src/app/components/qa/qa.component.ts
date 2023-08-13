import {Component} from "@angular/core";

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html'
})

export class QaComponent {
  containers = [
    {
      title: 'Will my contact database be safe?',
      text: 'Our system is designed in such a way that phone numbers are encoded and our employees do not see the phone numbers poured into the solution created for you. In addition, we sign a non-disclosure agreement (NDA).'
    },
    {
      title: 'How are you different from competitors?',
      text: 'We combine the creation of text and voice robots to work in various channels, represented by ready-made solutions tested on real people. Our team includes not only IT specialists, but also entrepreneurs and marketers. Our goal is to build strong partnerships with our customers and put our technology where it\'s needed and profitable.'
    },
    {
      title: 'Will my contact database be safe?',
      text: 'Our system is designed in such a way that phone numbers are encoded and our employees do not see the phone numbers poured into the solution created for you. In addition, we sign a non-disclosure agreement (NDA).'
    }
  ]
}
