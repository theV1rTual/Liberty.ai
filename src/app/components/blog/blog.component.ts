import {Component, OnInit} from "@angular/core";
import { BlogServiceService} from "../../services/blogService.service";
import {Blog} from "../../interfaces/blog.interface";

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html'
})

export class BlogComponent implements OnInit{

  blogs: Blog[] = []
  constructor(private blogService: BlogServiceService) {}

  ngOnInit() {
    this.getBlogs()
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe(value => {
      this.blogs = value
    })
  }
}
