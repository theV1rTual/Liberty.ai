import {Component, ElementRef, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../../shared/modals/modal.component";
import {Router} from "@angular/router";
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent{

  constructor(private scrollService: ScrollService) {}

  scrollToComponent(componentKey: string) {
    this.scrollService.scrollToComponent(componentKey);
  }

  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  navbar =  [
    {name: "Application Areas", link: 'component1', url: ''},
    {name: "Key Benefits", link: 'component2', url: ''},
    {name: "Getting Started", link: 'component3', url: ''},
    {name: "F.A.Q.", link: 'component4', url: ''},
    {name: "Blog", link: 'blog', url: 'blog'},
  ]

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
