import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<BlogPost[]>('http://localhost:3000/blog')
      .subscribe(data => this.blogPosts = data);
  }
}
