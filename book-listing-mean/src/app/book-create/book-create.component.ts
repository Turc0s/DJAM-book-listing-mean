
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookControlService } from '../book-control.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  constructor(private router: Router,
              private _bookControlService: BookControlService) { }

  ngOnInit() {
  }

  saveBook() {
    this._bookControlService.addNewBook()
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }  //ORIGINAL

  // saveBook(createForm: NgForm) {
  //   const newBook = {
  //     isbn: this._bookControlService.newBook.isbn,
  //     title: this._bookControlService.newBook.title,
  //     author: this._bookControlService.newBook.author,
  //     description: this._bookControlService.newBook.description,
  //     published_year: this._bookControlService.newBook.published_year,
  //     publisher: this._bookControlService.newBook.publisher,
  //   }
  //   this._bookControlService.addNewBook(newBook)
  //             .subscribe((res: Book) => {
  //               this._bookControlService.newBook = res;
  //             });
  // }

//   let id = res["_id"];
//   this.router.navigate(["/book-details", id]);
// }, (err) => {
//   console.log(err);



  // saveBook() {
  //   this.http.post('/book', this.book)
  //     .subscribe(res => {
  //         let id = res['_id'];
  //         this.router.navigate(['/book-details', id]);
  //       }, (err) => {
  //         console.log(err);
  //       }
  //     );
  // }  //ORIGINAL

}
