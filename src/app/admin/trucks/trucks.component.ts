import { Component, OnInit } from '@angular/core';
import {TruckService} from '../../services/truck.service'
@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {
  trucks: Array<object>
  constructor(private truckSrvice: TruckService) { }

  ngOnInit() {
    this.trucks = this.truckSrvice.getTrucks()
  }

}
