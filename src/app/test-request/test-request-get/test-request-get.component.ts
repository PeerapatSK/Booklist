import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { book } from './test-requset-get';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.scss']
})
export class TestRequestGetComponent implements OnInit {
bookList: book[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<book[]>('https://www.anapioficeandfire.com/api/books').subscribe(response=>{
      this.bookList = response;
    })
  }

}
