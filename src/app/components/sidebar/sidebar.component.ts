import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent {
  @Input() isSidebarOpen!: boolean;
  @Output() toggle = new EventEmitter<void>();

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.toggle.emit();
  }

  navbar =  [
    {name: "Application Areas", link: ''},
    {name: "Key Benefits", link: ''},
    {name: "Getting Started", link: ''},
    {name: "F.A.Q.", link: ''},
    {name: "Blog", link: 'blog'},
  ]

}
