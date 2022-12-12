import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroeDto } from '../../Interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  public value: string = '';
  public heroes: HeroeDto[] = [];
  public heroeSelect!: HeroeDto | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  search(){

    this.heroesService.getBySearch(this.value.trim())
    .subscribe( heroes => this.heroes = heroes );
  }

  selectHeroe(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.heroeSelect = undefined;
      return
    }
      

    const heroe: HeroeDto = event.option.value;
    this.value = heroe.superhero;

    this.heroesService.getById( heroe.id! )
    .subscribe( heroe => this.heroeSelect = heroe);
  }
}
