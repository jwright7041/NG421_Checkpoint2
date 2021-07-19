import { Component, OnInit } from '@angular/core';
import { IBook } from '../interfaces/ibook';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books: IBook[] = [];
  public newBook: IBook = {
    title: '',
    published: null,
    publisher: '',
    author: ''
  }
  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.books = await this.bookService.get();
  }

  async save() {
    await this.bookService.post(this.newBook);
    this.books = await this.bookService.get();
  }

}
