import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HeroeDto } from '../Interfaces/heroe.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient ) { }

  private apiUrl: string= environment.apiUrl;

  getList(): Observable<HeroeDto[]> {
    return this.http.get<HeroeDto[]>(`${this.apiUrl}/heroes`);
  }

  getById(id: string): Observable<HeroeDto> {
    return this.http.get<HeroeDto>(`${this.apiUrl}/heroes/${id}`);
  }
}
