import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"shared",loadChildren:()=>import ('./shared/shared-routing.module').then(m=>m.SharedRoutingModule)
    },
    {
        path:"",loadChildren:()=>import ('./user/user-routing.module').then(m=>m.UserRoutingModule)
    },
    {
        path:"register", loadChildren:()=>import('./register/register-routing.module').then(m=>m.RegisterRoutingModule)
    }
];
