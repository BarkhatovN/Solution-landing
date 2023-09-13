import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ReserveData } from "./book-table.component";

@Injectable({ providedIn: 'root' })
export class BookTableService {
  constructor(private readonly http: HttpClient) {}

  sendReserveTableRequest(data: ReserveData): Observable<void> {
    return this.http.post<void>('https://some-api-here.net/reserve-table', data);
  }
}
