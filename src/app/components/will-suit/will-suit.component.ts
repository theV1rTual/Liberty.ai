import {Component} from "@angular/core";

@Component({
  selector: 'app-will-suit',
  templateUrl: './will-suit.component.html'
})

export class WillSuitComponent {
  categories = [
    {name: 'MFI', active: false},
    {name: 'Banks', active: false},
    {name: 'Online schools', active: false},
    {name: 'Your industry', active: true},
    {name: 'Real estate agencies', active: false},
    {name: 'Healthcare', active: false},
    {name: 'Hotel business', active: false},
    {name: 'e-commerce', active: false},
    {name: 'HR & Recruitment', active: false},
    {name: 'Telecommunications', active: false},
    {name: 'Insurance', active: false},
    {name: 'Retail', active: false},

  ]
}
