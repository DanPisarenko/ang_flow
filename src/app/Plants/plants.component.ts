import { HttpBackend, HttpClient } from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import { map } from "rxjs/operators";
import { Plants } from "src/app/model/plant";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector:"plant-part",
  templateUrl: "./plants.component.html",
  styles: [`
  *{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
.container{
  display: block;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 450px;
  border-radius: 10px;

  background-color: lightgreen;
}
form{
  display: flex;
  flex-direction: column;
  padding: 15px;
}

form input{
  padding: 5px;
  margin: 0 0 10px 0;
  font-size: 15pt;
}
h1{
  margin: 20px;
}
.clms{
  display: grid;
  grid-template-columns: 430px auto 52%;
  gap: 25px;
  width: 100%;
}
.fhgfd{
  padding: 15px;
  border-radius: 25px;
  width: 350px;
  height:  auto;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.allPlants{
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hhh{
padding-top: 15px;
}

img{
  border-radius: 15px;
}
  
  `]
  
})

export class PlantsT  implements OnInit{
  display = "none"
  allPlants: Plants[] = []
  plantsPart = this.allPlants.slice(1, 4);
  cat: string //= "Садовые"
  
  constructor(private http: HttpClient, private actRoute: ActivatedRoute){
    this.cat = this.actRoute.snapshot.params['id'];
  }
  reloadCurrentPage() {
    window.location.reload();
   }
  modalAdd(){
    this.display = "block"
  }
  modalRem(){
    this.display = "none"
  }
  ngOnInit() {
    this.fetchPlants()
  }
  
  private fetchPlants(){
    this.http.get<{[key: string]: Plants}>('https://api.petiteweb.dev/plants')
    .pipe(map((res) => {
      let plants = []
      let pPlants = plants.slice(1, 2)
       for(const key in res){
        if(res.hasOwnProperty(key)){
          pPlants.push({...res[key], id: key})
          console.log(res)
        }
        
       }
       return pPlants;
    }))
    .subscribe((palnts)=>{
      console.log(palnts)
      this.plantsPart = palnts;
    })
  }
}
