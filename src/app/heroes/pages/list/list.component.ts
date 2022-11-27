import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeDto } from '../../Interfaces/heroe.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`
    
  `]
})
export class ListComponent implements OnInit {

  public listHeroes: HeroeDto[] = [];

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.heroesService.getList().subscribe( heroes => {

      this.listHeroes = heroes;
    });
  }

}
