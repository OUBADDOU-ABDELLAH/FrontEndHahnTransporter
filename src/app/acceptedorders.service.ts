import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDto, ResponseDto } from './order.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcceptedordersService {

  private apiUrl = 'https://localhost:7131/api/Order?username='; 
  constructor(private http: HttpClient) { }

  getAllAcceptedOrders(username: string): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.apiUrl+username);
  }
}
