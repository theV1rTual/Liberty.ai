import {Component, OnInit} from "@angular/core";
import { BlogServiceService} from "../../services/blogService.service";
import {Blog} from "../../interfaces/blog.interface";
import {MatDialog} from "@angular/material/dialog";
import {BlogModalComponent} from "../../shared/modals/blogModal/blogModal.component";

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html'
})

export class BlogComponent implements OnInit{

  blogs: Blog[] = []
  blog!: Blog
  loading: boolean = true
  constructor(private blogService: BlogServiceService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getBlogs()
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe(value => {
      this.loading = false
      this.blogs = value
    })
  }

  openBlog(id: number) {
    this.blogService.getBlog(id).subscribe(value => {
      this.blog = value

      this.dialog.open(BlogModalComponent, {
        data: this.blog
      })
    })

  }

  currentPage = 1;

  changePage(page: number): void {
    this.currentPage = page;
  }

  protected readonly Array = Array;
}
