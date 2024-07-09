import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { userInfo } from './userInfoModel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private usernameSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private transporterIdsSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  private apiUrl = 'https://localhost:7131/';
  isLoggedIn = false;
  coins : number =-1;
  userInfo : userInfo=new userInfo() ;
  constructor(private http: HttpClient) { }

  setUsername(username: string): void {
    this.usernameSubject.next(username);
  }

  getUsername(): Observable<string | null> {
    return this.usernameSubject.asObservable();
  }
  getTransporterIds(): Observable<number[]> {
    return this.transporterIdsSubject.asObservable();
  }
  getCoins(username: string): Observable<number> {
    return this.http.get<{ coins: number }>(this.apiUrl+'api/Login/Coins?username='+username)
      .pipe(
        map(response => response.coins)
      );
  }
  public login(username: string, password: string): Observable<number[]> {
    const body = { username, password };
    return this.http.post<number[]>(this.apiUrl+'api/Login', body);
  }

  setTransporterIds(transporterIds: number[]): void {
    this.transporterIdsSubject.next(transporterIds);
  }
}
