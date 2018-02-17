import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from "@angular/http";
import { Book } from './book.model';
import "rxjs/Rx";

@Injectable()
export class BookControlService {

  // bookList: Book[];
  // book: Book;

  constructor(private httpClient: HttpClient) { }

  getAllBooks() {
    return this.httpClient.get("/book");
  }

  // this.http.get('/book').subscribe(data => {
  //   console.log(data);
  //   this.books = data;
  // });


}
