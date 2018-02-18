import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from "@angular/http";
import { Book } from './book.model';
import "rxjs/Rx";

@Injectable()
export class BookControlService {

  bookList: Book[];
  // book:Book;
  // newBook: Book = new Book();
  // book: Book;
  // books:any;
  book = {};

  constructor(private httpClient: HttpClient) { }

  getAllBooks() {
    return this.httpClient.get("/book");
  }

  getSingleBook(id: any) {
    return this.httpClient.get("/book/"+id);
  }

  addNewBook() {
    return this.httpClient.post("/book", this.book);
  }

  updateBook() {
    
  }

  deleteBook(id: any) {
    return this.httpClient.delete("/book/"+id);
  }

  showAllBooks() {
    this.getAllBooks()
      .subscribe((book: Book[]) => {
        this.bookList = book;
      });
  }

  // saveBook() {
  //   this.http.post('/book', this.book)
  //     .subscribe(res => {
  //         let id = res['_id'];
  //         this.router.navigate(['/book-details', id]);
  //       }, (err) => {
  //         console.log(err);
  //       }
  //     );
  // }

  // this.http.get('/book').subscribe(data => {
  //   console.log(data);
  //   this.books = data;
  // });

  

  // this._bookcontrolService.getAllBooks()
    //           .subscribe(book => {
    //             this.books = book;
    //           });


}
