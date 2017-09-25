import { Injectable } from '@angular/core';

@Injectable()
export class DriverService {
  public drivers: Array<object>
  constructor() {
    this.drivers = [
      {id: "1", first: "Tunde", last: "Ganiy", last_drug_date: Date.now(), address: "Nechells", city: "Birmingham"},
      {id: "2", first: "Tunde", last: "Ganiy", last_drug_date: Date.now(), address: "Nechells", city: "Birmingham"},
      {id: "3", first: "Tunde", last: "Ganiy", last_drug_date: Date.now(), address: "Nechells", city: "Birmingham"},
      {id: "4", first: "Tunde", last: "Ganiy", last_drug_date: Date.now(), address: "Nechells", city: "Birmingham"},
      {id: "5", first: "Tunde", last: "Ganiy", last_drug_date: Date.now(), address: "Nechells", city: "Birmingham"},
      {id: "6", first: "Tunde", last: "Ganiy", last_drug_date: Date.now(), address: "Nechells", city: "Birmingham"},
      // {first: "Tunde", last: "Ganiy", last_drug_date: Date.now(), address: "Nechells", city: "Birmingham"},
      // {first: "Tunde", last: "Ganiy", last_drug_date: Date.now(), address: "Nechells", city: "Birmingham"},
      // {first: "Tunde", last: "Ganiy", last_drug_date: Date.now(), address: "Nechells", city: "Birmingham"},
      // {first: "Tunde", last: "Ganiy", last_drug_date: Date.now(), address: "Nechells", city: "Birmingham"},
    ]
   }

   getDrivers(){
     return this.drivers;
   }

  

}
