import {Component} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../../shared/modals/modal.component";

@Component({
  selector: 'app-start-work',
  templateUrl: './start-work.component.html'
})

export class StartWorkComponent {
  constructor(private dialog: MatDialog) {
  }

  openModal() {
    this.dialog.open(ModalComponent)
  }
}
