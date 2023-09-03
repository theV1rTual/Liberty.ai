import {Component} from "@angular/core";

@Component({
  selector: 'app-will-suit',
  templateUrl: './will-suit.component.html'
})

export class WillSuitComponent {
  categories = [
    {name: 'Human-likeness', active: false},
    {name: 'No-code', active: false},
    {name: 'Database Segmentation', active: false},
    {name: 'Natural Language Understanding', active: false},
    {name: 'Speech Synthesis', active: false},
    {name: 'Advanced Reporting', active: false},
    {name: 'Open API', active: false},
    {name: 'Human Intervention Anytime', active: false},
    {name: 'More than 70 languages', active: false},
    {name: 'Database Encryption', active: false},
    {name: 'AI Analysis', active: false},

  ]
}
