import { Injectable } from '@nestjs/common';



@Injectable()
export abstract class Report{
  abstract reportEveryDay();
 details(){
   console.log("income 5000");
   this.reportEveryDay();
 }
}

@Injectable()
export class Monday extends Report{

 reportEveryDay() {
   console.log("expenses 3000");
   console.log("saving 2000");
   
 }
}


@Injectable()
export class Tuesday extends Report{

  reportEveryDay() {
    console.log("expenses 1500");
    console.log("saving 3500");
 }
}


@Injectable()
export class Wednesday extends Report{

  reportEveryDay() {
    console.log("expenses 2000");
    console.log("saving 3000");
 }
}

@Injectable()
export class Thursday extends Report{

  reportEveryDay() {
    console.log("expenses 2800");
    console.log("saving 2200");
 }
}

@Injectable()
export class Friday extends Report{

  reportEveryDay() {
    console.log("expenses 4000");
    console.log("saving 1000");
 }
}

@Injectable()
export class Saturday extends Report{

  reportEveryDay() {
    console.log("expenses 500");
    console.log("saving 4500");
 }
}





@Injectable()
export class AppService {
  constructor(
      private readonly oneD : Monday,
      private readonly twoD : Tuesday,
      private readonly threeD : Wednesday,
      private readonly fourD : Tuesday,
      private readonly fiveD : Friday,
      private readonly sixD : Saturday,
      
      )
  {}
  getDetails() {
    this.oneD.details();
    this.twoD.details();
    this.threeD.details();
    this.fourD.details();
    this.fiveD.details();
    this.sixD.details();
  }
}
