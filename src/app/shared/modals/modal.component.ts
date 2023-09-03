import {Component} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent {
  formGroup = new FormGroup({
    name: new FormControl(''),
    phone_number: new FormControl(''),
    email: new FormControl('')
  })

}
