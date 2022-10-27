import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchOneComponent } from './pages/search-one/search-one.component';




@NgModule({
  declarations: [
    CreateComponent,
    HomeComponent,
    ListComponent,
    SearchComponent,
    SearchOneComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
