import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataArray = [];
  data = 1;
  totalItems = 0;

  constructor(
    private readonly homeService: HomeService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.getPosts(this.data);

  }

  getPosts(data) {
    console.log(this.data)
    this.homeService.getPosts(data).subscribe(response => {
      console.log(response);
      this.dataArray = response.data;
      this.totalItems = response.total;
    }, error => {
     alert(error);
    });
  }
  pageChanged(event: PageChangedEvent): void {
    console.log( event.page);
    this.getPosts(event.page);

  }
}
