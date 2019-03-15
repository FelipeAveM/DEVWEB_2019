import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'

//Componentes
import { DetalleTweetComponent } from './detalle-tweet/detalle-tweet.component';
import { ListadoTweetsComponent } from './listado-tweets/listado-tweets.component'

//Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Material } from './model/material';


@NgModule({
  declarations: [
    AppComponent,
    DetalleTweetComponent,
    ListadoTweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
