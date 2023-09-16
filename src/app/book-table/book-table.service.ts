import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ReserveData } from "./book-table.component";

@Injectable({ providedIn: 'root' })
export class BookTableService {
  constructor(private readonly http: HttpClient) { }

  sendReserveTableRequest(data: ReserveData): Observable<void> {
    return this.http.post<void>('/send', { text: 'Заявка на связаться с гостем с сайта: имя:' + data.name + ' телефон:' + data.phone });
  }
}
