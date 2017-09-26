import {Routes} from '@angular/router';
import {DriverDetailComponent} from './driver-detail/driver-detail.component'
import {DriverInfoComponent} from './driver-info/driver-info.component'
import {DriverDeductionsComponent} from './driver-deductions/driver-deductions.component'
import {DriverHistoryComponent} from './driver-history/driver-history.component'
import {NewDriverComponent} from './new-driver/new-driver.component'

export const DRIVER_ROUTES: Routes = [
    {path: ':id', component: DriverDetailComponent, children: [
        {path: 'info', component: DriverInfoComponent},
        {path: 'history', component: DriverHistoryComponent},
        {path: 'deductions', component: DriverDeductionsComponent}
    ]},
    {path: 'new', component: NewDriverComponent}
]