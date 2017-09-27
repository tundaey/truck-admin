import { Injectable } from '@angular/core';

@Injectable()
export class TruckService {

  public trucks: Array<object>
  constructor() {
    this.trucks = [
      {id: "1", unit_no: "123", last_trl: "5112", driver: "Kolejka", status: "Assigned", dispatcher: "", federal_inspection: ""},
      {id: "2", unit_no: "123", last_trl: "5112", driver: "Kolejka", status: "Assigned", dispatcher: "", federal_inspection: ""},
      {id: "3", unit_no: "123", last_trl: "5112", driver: "Kolejka", status: "Assigned", dispatcher: "", federal_inspection: ""},
      {id: "4", unit_no: "123", last_trl: "5112", driver: "Kolejka", status: "Assigned", dispatcher: "", federal_inspection: ""},
      {id: "5", unit_no: "123", last_trl: "5112", driver: "Kolejka", status: "Assigned", dispatcher: "", federal_inspection: ""},
      {id: "6", unit_no: "123", last_trl: "5112", driver: "Kolejka", status: "Assigned", dispatcher: "", federal_inspection: ""},
      {id: "7", unit_no: "123", last_trl: "5112", driver: "Kolejka", status: "Assigned", dispatcher: "", federal_inspection: ""},
      {id: "8", unit_no: "123", last_trl: "5112", driver: "Kolejka", status: "Out of serv", dispatcher: "", federal_inspection: ""},
      {id: "9", unit_no: "123", last_trl: "5112", driver: "Kolejka", status: "Assigned", dispatcher: "", federal_inspection: ""},
  
    ]
   }

   getTrucks(){
     return this.trucks;
   }

}
