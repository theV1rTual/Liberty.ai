import {Component} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../../shared/modals/modal.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  navbar =  [
    {name: "Application Areas"},
    {name: "Key Benefits"},
    {name: "Getting Started"},
    {name: "F.A.Q."},
    {name: "Blog"},
  ]

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
