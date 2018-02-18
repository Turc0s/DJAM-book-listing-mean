
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BookControlService } from '../book-control.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

  book = {};

  constructor(private router: Router, private route: ActivatedRoute,
              private _bookControlService: BookControlService) { }

  ngOnInit() {
    console.log("in ngOnInit book-detail. getBookDetail()");
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this._bookControlService.getSingleBook(id)
    .subscribe(data => {
      this.book = data;
    });
    console.log("getBookDetail(): " + id)
  }

  // getBookDetail(id) {
  //   this.http.get('/book/'+id).subscribe(data => {
  //     this.book = data;
  //   });
  //   console.log("getBookDetail(): " + id)
  // } // ORIGINAL

  deleteBook(id) {
    this._bookControlService.deleteBook(id)
      .subscribe(res => {
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  // deleteBook(id) {
  //   this.http.delete('/book/'+id)
  //     .subscribe(res => {
  //         this.router.navigate(['/books']);
  //       }, (err) => {
  //         console.log(err);
  //       }
  //     );
  // } // ORIGINAL

}

