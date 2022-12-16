import { HttpBackend, HttpClient } from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import { map } from "rxjs/operators";
import { Plants } from "src/app/model/plant";

@Component({
  selector:"add-plant-page",
  templateUrl: "./addplants.component.html",
  styleUrls: ["./addplants.component.scss"]
})

export class AddPlants  implements OnInit{
  display = "none"
  allPlants: Plants[] = []
  constructor(private http: HttpClient){

  }
  modalAdd(){
    this.display = "flex"
  }
  modalRem(){
    this.display = "none"
  }
  ngOnInit() {
  }
  
  onPlantCreate(plants: {name: string, description: string, images: string[], category: string, sunlight: number, watering:number, temperature: number}){
    console.log(plants)
    this.http.post<{name: string}>('https://api.petiteweb.dev/plants', plants)
    .subscribe((res) =>{
      console.log(res)
      alert("Ваше растение было добавлено")
    })
  }

}
