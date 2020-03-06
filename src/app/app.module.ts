import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

