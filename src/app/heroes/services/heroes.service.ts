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

  getBySearch(value: string): Observable<HeroeDto[]> {
    return this.http.get<HeroeDto[]>(`${this.apiUrl}/heroes?q=${ value }&_limit=5`);
  }

  save(heroe: HeroeDto): Observable<HeroeDto>{
    return this.http.post<HeroeDto>(`${this.apiUrl}/heroes`, heroe);
  }

  update(heroe: HeroeDto): Observable<HeroeDto>{
    return this.http.put<HeroeDto>(`${this.apiUrl}/heroes/${heroe.id}`, heroe);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/heroes/${id}`);
  }
}
