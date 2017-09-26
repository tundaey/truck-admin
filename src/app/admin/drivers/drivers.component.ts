import { Component, OnInit } from '@angular/core';
import {DriverService} from '../../services/driver.service'
//import * as $ from 'jquery';
//import 'datatables.net'
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  drivers: Array<object>;
  public tableWidget: any;
  constructor(private driverService: DriverService) { }

  ngOnInit() {
    this.drivers = this.driverService.getDrivers()
  }

  ngAfterViewInit(){
    this.initDatatable()
  }

  private initDatatable(): void {
    let exampleId: any = $('#example');
    this.tableWidget = exampleId.DataTable({
      select: true
    });
  }

}
