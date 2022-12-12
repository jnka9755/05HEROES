import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchOneComponent } from './pages/search-one/search-one.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';

import { ImagePipe } from './pipes/image.pipe';



@NgModule({
  declarations: [
    CreateComponent,
    HomeComponent,
    ListComponent,
    SearchComponent,
    SearchOneComponent,
    HeroeCardComponent,
    
    ImagePipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
