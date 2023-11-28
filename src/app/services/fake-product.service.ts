import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FakeProduct } from '../shared/interface';
import { endpoints } from '../utils/endpoints'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeProductService {

  constructor(private http: HttpClient) { }

  getProduct(): Observable<FakeProduct[]> {
    const data = this.http.get<FakeProduct[]>(endpoints.getProduct)
    return data
  }
}
