import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter-App';
  author="Saikat"
  count:number=0
  handleIncrease() {
    this.count+=1
  }


  handleDecrease=()=>{
    if(this.count>0){
      this.count-=1
    }
    // else{
    //   this.count=0
    // }

  }

  resetHandler=()=>{
    this.count=0
  }
}
