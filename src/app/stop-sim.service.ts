import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StopSimService {
  private apiUrl = 'https://localhost:7131/api/Sim/stop?username='; 
  constructor(private http: HttpClient) { }

  StopSim(username: string) {
    return this.http.post(this.apiUrl+username,null);
  }
}
