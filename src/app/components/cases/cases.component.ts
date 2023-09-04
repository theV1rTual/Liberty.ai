import {Component} from "@angular/core";
import {ModalComponent} from "../../shared/modals/modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html'
})

export class CasesComponent {

  constructor(private dialog: MatDialog) {
  }

  cases = [
    {name: 'Retail', active: true},
  ]
  containers = [
    {
      header: '+200%',
      description: 'Engagement after reaching out',
      text: 'An omni-channel automated sales funnel triples customer purchases.'
    },
    {
      header: '+500%',
      description: 'Reactivated Clients',
      text: 'Our streamlined solution increases the number of reactivated customers by x6 times.'
    },
    {
      header: '60%',
      description: 'Automation',
      text: 'Automation of 60% reactivation processes: calling, sending SMS, Messages, and Emails.'
    }
  ]

  openModal() {
    this.dialog.open(ModalComponent)
  }
}
