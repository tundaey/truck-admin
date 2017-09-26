import {Routes} from '@angular/router';
import {TruckDetailComponent} from './truck-detail/truck-detail.component'
import {TruckInfoComponent} from './truck-info/truck-info.component'
import {TruckHistoryComponent} from './truck-history/truck-history.component'
import {TruckDocumentsComponent} from './truck-documents/truck-documents.component'
import {NewTruckComponent} from './new-truck/new-truck.component'

export const TRUCK_ROUTES: Routes = [
    {path: ':id', component: TruckDetailComponent, children: [
        {path: 'base-info', component:TruckInfoComponent},
        {path: 'history', component: TruckHistoryComponent},
        {path: 'documents', component: TruckDocumentsComponent}
    ]},
    {path: 'new', component: NewTruckComponent}
]