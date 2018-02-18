
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
  }  

}
