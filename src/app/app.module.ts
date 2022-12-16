import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {HomePage} from "./Home/home.component";
import {HeaderComponent} from "./Header/header.component";
import {NotFound} from "./NotFound/notfound.component";
import {AddPlants} from "./AddPlants/addplants.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlantsPage } from './PlantPage/plantpage.component';
import  {PlantsT} from './Plants/plants.component';
import { CommonModule } from '@angular/common';

const routers: Routes = [
  {path: "", component: HomePage},
  {path: "all", component: AddPlants},
  {path: "category/:id", component: PlantsT},
  {path: "plant/:id", component: PlantsPage },
  {path: "**", component: NotFound},



]
@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HeaderComponent,
    AddPlants,
    PlantsT,
    NotFound,
    

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(routers),
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
