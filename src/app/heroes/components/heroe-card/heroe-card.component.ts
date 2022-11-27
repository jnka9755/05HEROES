import { Component, Input, OnInit } from '@angular/core';

import { HeroeDto } from '../../Interfaces/heroe.interface';

@Component({
  selector: 'heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [`
    mat-card{
        margin-top: 20px
      }
  `]
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe!: HeroeDto;

  constructor() { }

  ngOnInit(): void {
  }

}
