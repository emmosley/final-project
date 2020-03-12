import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ListComponent,
    DetailsComponent,
    HeaderComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

