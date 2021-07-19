import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IBook } from '../interfaces/ibook';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public async get(): Promise<IBook[]> {
    return await this.httpClient.get<IBook[]>(`${this.baseUrl}book`).toPromise();
  }

  public async post(newBook: IBook): Promise<IBook> {
    return await this.httpClient.post<IBook>(`${this.baseUrl}book`, newBook).toPromise();
  }
}


