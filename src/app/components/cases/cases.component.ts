import {Component} from "@angular/core";

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html'
})

export class CasesComponent {
  cases = [
    {name: 'Electronic commerce', active: true},
    {name: 'Online schools', active: false},
    {name: 'Bookmakers', active: false},
    {name: 'Taxi depots', active: false},
    {name: 'HR and Recruiting', active: false},
    {name: 'Insurance', active: false},
    {name: 'MFI', active: false},
  ]
  containers = [
    {
      header: '+7200',
      description: 'additional sales per month',
      text: 'Automation of the process - cold calls on the database, in order to sell goods (vitamins)'
    },
    {
      header: '+10%',
      description: 'redemption of sent parcels',
      text: 'Automation of the process - stimulating the client to redeem the parcel of the online store sent to the client by cash on delivery'
    },
    {
      header: '70%',
      description: 'savings in manager\'s time',
      text: 'Automation of the process - re-confirmation of online store orders'
    }
  ]

}
