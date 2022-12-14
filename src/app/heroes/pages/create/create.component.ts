import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

import { HeroeDto, Publisher } from '../../Interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class CreateComponent implements OnInit {


  public heroe: HeroeDto = {
    superhero: "",
    alter_ego: "",
    characters: "",
    first_appearance: "",
    publisher: Publisher.DCComics,
    image: ""
  };

  public publishers = [
    {
      id: "DC Comics",
      description: "DC-Comics"
    },
    {
      id: "Marvel Comics",
      description: "Marvel - Comics"
    },
  ];

  constructor(private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit(): void {

    if(!this.router.url.includes('edit')){
      return
    }

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getById(id) )
    )
    .subscribe(heroe => this.heroe = heroe)
  }

  saveHeroe(){

    if(this.heroe.superhero.trim().length === 0 || this.heroe.image.trim().length === 0)
      return

    if(this.heroe.id){
      this.heroesService.update(this.heroe)
      .subscribe(heroe => this.showNofication('Registro actualizado'));
    }
    else{
      this.heroesService.save(this.heroe)
      .subscribe(heroe => {
        this.showNofication('Registro creado');
        this.router.navigate(['/heroes/edit', heroe.id])
      }); 
    }
  }

  deleteHeroe(){
    
    const dialog = this.dialog.open( ConfirmComponent, {
      width: '250px',
      data: this.heroe
    });

    dialog.afterClosed()
    .subscribe(result => {
      if(result){
        this.heroesService.delete(this.heroe.id)
        .subscribe(response =>{
        this.router.navigate(['/heroes']);
      });
      }
    });  
  }

  showNofication(message: string){
    
    this.snackBar.open(message, 'Cerrar', 
    {
      duration: 2500
    });
  }
}
