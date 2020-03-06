import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },  
    { path: 'card', component: CardComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'list', component: ListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
