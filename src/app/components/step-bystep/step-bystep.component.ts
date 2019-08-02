import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-bystep',
  templateUrl: './step-bystep.component.html',
  styleUrls: ['./step-bystep.component.css']
})
export class StepBystepComponent implements OnInit {

  @Input('steps') steps:number;
  @Input('progress') progress:number;

  stepsNumber:string[]=[];
  step1:Step;
  step2:Step;
  step3:Step;
  step4:Step;
  step5:Step;
  step6:Step;

  margin:string;

  constructor() {
    this.init();
  }

  ngOnInit() {

    this.arrayNumberStep();
  }
  arrayNumberStep(){
    let distance = 97/(this.steps-1);
    for(let i = 1;i<=this.steps;i++){
      switch(i){
        case 1: this.step1.active = true;
                this.step1.position = "0";
        break;
        case 2: this.step2.active = true;
                this.step2.position = (parseInt(this.step1.position) + distance).toString();
                if (this.steps==2)
                  this.step2.position = (parseInt(this.step2.position) - 6).toString();
        break;
        case 3: this.step3.active = true;
                this.step3.position = (parseInt(this.step2.position) + distance).toString();
        break;
        case 4: this.step4.active = true;
                this.step4.position = (parseInt(this.step3.position) + distance).toString();
        break;
        case 5: this.step5.active = true;
                this.step5.position = (parseInt(this.step4.position) + distance).toString();
        break;
        case 6: this.step6.active = true;
                this.step6.position = (parseInt(this.step5.position) +(97 - parseInt(this.step5.position))).toString();
        break;
      }
    }
  }
  init(){
    this.step1 = {
      active: false,
      position: "0"
    }
    this.step2 = {
      active: false,
      position: "0"
    }
    this.step3 = {
      active: false,
      position: "0"
    }
    this.step4 = {
      active: false,
      position: "0"
    }
    this.step5 = {
      active: false,
      position: "0"
    }
    this.step6 = {
      active: false,
      position: "0"
    }
  }

}
interface Step{
  active:boolean;
  position:string;
}
