import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { HeroeDto } from '../../Interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-one',
  templateUrl: './search-one.component.html',
  styles: [`
    img{
      height: 80%;
      border-radius: 20px;
    }
    
  `]
})
export class SearchOneComponent implements OnInit {


  public heroe!: HeroeDto;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getById(id) ),
    ).subscribe( heroe => {
      this.heroe = heroe;
    });
  }

  retunrList(){
    this.router.navigate(['heroes/list']);
  }
}