import {Component, ElementRef} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../../shared/modals/modal.component";
import {Router} from "@angular/router";
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToComponent(componentKey: string) {
    this.scrollService.scrollToComponent(componentKey);
  }

  navbar =  [
    {name: "Application Areas", link: 'component1'},
    {name: "Key Benefits", link: 'component2'},
    {name: "Getting Started", link: 'component3'},
    {name: "F.A.Q.", link: 'component4'},
    {name: "Blog", link: 'blog'},
  ]

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
