import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },  
    { path: 'causes', component: CardComponent },
    { path: 'favorites', component: DetailsComponent },
    { path: 'charities', component: ListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
  
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
