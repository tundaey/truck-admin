import { Component, OnInit } from '@angular/core';
import {DriverService} from '../../services/driver.service'

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  drivers: Array<object>
  constructor(private driverService: DriverService) { }

  ngOnInit() {
    this.drivers = this.driverService.getDrivers()
  }

}
