import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

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

  login():Observable<AuthDto>{
    return this.http.get<AuthDto>(`${this.apiUrl}/usuarios/1`)
    .pipe(
      tap(response => this._auth = response)
    );
  }
}
