import {Component} from "@angular/core";

@Component({
  selector: "not-found-page",
  template: `
  <div class="err">
      <h3>404 not found</h3>
  </div>
  `,
  styles: [`
  .err{
      position: fixed;
      top: 100px;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      z-index: -1;
  }
  .img{
    width: 350px;
    height: 350px;

  }
  `]
})

export class NotFound{

}
