import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StartSimService {

  private apiUrl = 'https://localhost:7131/api/Sim?transporterId='; 
  constructor(private http: HttpClient) { }
  StartSim(username: string,transporterId: number) {
    return this.http.post(this.apiUrl+transporterId+'&username='+username,null);
  }
}
