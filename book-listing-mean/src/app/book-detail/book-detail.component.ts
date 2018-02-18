
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

  constructor(private router: Router, private route: ActivatedRoute,
              private _bookControlService: BookControlService) { }

  ngOnInit() {
    console.log("in ngOnInit book-detail. getBookDetail()");
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this._bookControlService.getSingleBook(id)
    .subscribe(data => {
      this._bookControlService.book = data;
    });
    console.log("getBookDetail(): " + id)
  }

  deleteBook(id) {
    this._bookControlService.deleteBook(id)
      .subscribe(res => {
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

