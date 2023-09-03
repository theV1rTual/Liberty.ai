import {Component} from "@angular/core";

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html'
})

export class QaComponent {
  containers = [
    {
      title: 'Will my contact database be safe?',
      text: 'Rest assured that our system utilizes robust encryption techniques to safeguard phone numbers, rendering them inaccessible to our staff. This solution is exclusively tailored for your use. Moreover, we bolster this security with a Non-Disclosure Agreement (NDA) for your added peace of mind.'
    },
    {
      title: 'How are you different from competitors?',
      text: 'What sets us apart is our holistic approach, effortlessly integrating text and voice bots across multiple channels using tried-and-tested solutions validated through actual usage. Our team comprises not just IT specialists, but also entrepreneurs and marketers, guaranteeing a well-rounded perspective. We emphasize forging robust partnerships, strategically implementing our technology to optimize value and profitability for our clients.'
    },
    {
      title: 'How to calculate the cost of developing a robot?',
      text: 'The pricing for each project is tailored to its unique requirements, considering the complexity of the automation process and the chosen pricing model. This method ensures a customized solution that precisely aligns with your individual needs.'
    }
  ]
}
