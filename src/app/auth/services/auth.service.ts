import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators'

import { environment } from 'src/environments/environment';
import { AuthDto } from '../interfaces/auth.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string= environment.apiUrl;
  private _auth: AuthDto | undefined;

  get auth(): AuthDto{
    return { ...this._auth! }
  }

  constructor(private http: HttpClient) { }

  validateAuth(): Observable<boolean> {
    
    if(!localStorage.getItem('id')){
      return of(false);
    }

    return this.http.get<AuthDto>(`${this.apiUrl}/usuarios/1`)
    .pipe(
      map( auth => {
        this._auth = auth;
        return true;
      })
    );
  }

  login():Observable<AuthDto>{
    return this.http.get<AuthDto>(`${this.apiUrl}/usuarios/1`)
    .pipe(
      tap(response => this._auth = response),
      tap(auth => localStorage.setItem('id', auth.id))
    );
  }

  logout(){
    this._auth = undefined;
  }
}
