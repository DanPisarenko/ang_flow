import {Component} from "@angular/core";
import { faSun } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "main-header",
  templateUrl: "./header.component.html",
  styles: [
    `
    body{
      margin: 0;
    }
    header{
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: 12pt;
      z-index: 999;
    }
    nav{
      display: flex;
      gap: 20px;
    }
    .lo{

      font-size: 18pt;
    }



    
    a{
      text-decoration: none;
      color: inherit;
    }
    .active{
      color: green;
      text-decoration-line: underline;
    }
    `
  ]
})

export class HeaderComponent{
}
