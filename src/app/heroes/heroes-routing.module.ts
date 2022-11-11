import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchOneComponent } from './pages/search-one/search-one.component';
import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes =[
  { path: '', component: HomeComponent, children:[
    { path: 'list', component: ListComponent },
    { path: 'create', component: CreateComponent },
    { path: 'edit/:id', component: CreateComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:id', component: SearchOneComponent },
    { path: '**', redirectTo: 'list' }
  ]}
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
