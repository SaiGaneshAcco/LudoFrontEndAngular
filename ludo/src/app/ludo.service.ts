import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LudoService {
  // pathValues=[
  //   {1:"x7y2"},{2:"x7y3"},{3:"x7y4"},{4:"x7y5"},{5:"x7y6"},{6:"x6y7"},{7:"x5y7"},{8:"x4y7"},{9:"x3y7"},{10:"x2y7"},
  //   {11:"x1y7"},{12:"x1y8"},{13:"x1y9"},{14:"x2y9"},{15:"x3y9"},{16:"x4y9"},{17:"x5y9"},{18:"x6y9"},{19:"x7y10"},{20:"x7y11"},
  //   {21:"x7y12"},{22:"x7y13"},{23:"x7y14"},{24:"x7y15"},{25:"x8y15"},{26:"x9y15"},{27:"x9y14"},{28:"x9y13"},{29:"x9y12"},{30:"x9y11"},
  //   {31:"x9y10"},{32:"x10y9"},{33:"x11y9"},{34:"x12y9"},{35:"x13y9"},{36:"x14y9"},{37:"x15y9"},{38:"x15y8"},{39:"x15y7"},{40:"x14y7"},
  //   {41:"x13y7"},{42:"x12y7"},{43:"x11y7"},{44:"x10y7"},{45:"x9y6"},{46:"x9y5"},{47:"x9y4"},{48:"x9y3"},{49:"x9y2"},{50:"x9y1"},
  //   {51:"x8y1"},{52:"x7y1"}
  // ];
  pathValues=[
    "x7y2","x7y3","x7y4","x7y5","x7y6","x6y7","x5y7","x4y7","x3y7","x2y7",
    "x1y7","x1y8","x1y9","x2y9","x3y9","x4y9","x5y9","x6y9","x7y10","x7y11",
    "x7y12","x7y13","x7y14","x7y15","x8y15","x9y15","x9y14","x9y13","x9y12","x9y11",
    "x9y10","x10y9","x11y9","x12y9","x13y9","x14y9","x15y9","x15y8","x15y7","x14y7",
    "x13y7","x12y7","x11y7","x10y7","x9y6","x9y5","x9y4","x9y3","x9y2","x9y1",
    "x8y1","x7y1"
  ];
  blueHomePath:{[key:number]:string}={
    51:"x8y2",52:"x8y3",53:"x8y4",54:"x8y5",55:"x8y6",56:"home"
  }
  redHomePath:{[key:number]:string}={
    51:"x2y8",52:"x3y8",53:"x4y8",54:"x5y8",55:"x6y8",56:"home"
  }
  greenHomePath:{[key:number]:string}={
    51:"x8y14",52:"x8y13",53:"x8y12",54:"x8y11",55:"x8y10",56:"home"
  }
  yellowHomePath:{[key:number]:string}={
    51:"x14y8",52:"x13y8",53:"x12y8",54:"x11y8",55:"x10y8",56:"home"
  }
  constructor() { }
  diceValue(){
    return 1+Math.floor(Math.random()*5);
  }
  getCellValue(num:number){
    return this.pathValues[num];
  }
  getCellValues(){
    return this.pathValues;
  }
}
