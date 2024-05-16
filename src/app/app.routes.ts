import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"shared",loadChildren:()=>import ('./shared/shared-routing.module').then(m=>m.SharedRoutingModule)
    },
    {
        path:"",loadChildren:()=>import ('./user/user-routing.module').then(m=>m.UserRoutingModule)
    },
];
