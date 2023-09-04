import {Component} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../../shared/modals/modal.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  constructor(private router: Router) {
  }

  navbar =  [
    {name: "Application Areas", link: ''},
    {name: "Key Benefits", link: ''},
    {name: "Getting Started", link: ''},
    {name: "F.A.Q.", link: ''},
    {name: "Blog", link: 'blog'},
  ]

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
