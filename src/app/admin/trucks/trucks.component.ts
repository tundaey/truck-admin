import { Component, OnInit } from '@angular/core';
import {TruckService} from '../../services/truck.service'

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {
  trucks: Array<object>
  tableWidget: any;
  constructor(private truckSrvice: TruckService) { }

  ngOnInit() {
    this.trucks = this.truckSrvice.getTrucks()
  }

  ngAfterViewInit(){
    this.initDatatable()
  }

  private initDatatable(): void {
    let exampleId: any = $('#truck');
    this.tableWidget = exampleId.DataTable({
      select: true
    });
  }

}
