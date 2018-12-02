import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { MaestroComponent } from './pages/maestro/maestro.component';
import { LoggedGuard } from './guards/logged.guard';
const AppRoutes:Routes = [
        {
            component: LoginComponent,
            path:'login',
            
        },
        {
            component: HomeComponent,
            path:'home',
            canActivate:[LoggedGuard]
        },
        {
            component: MateriasComponent,
            path:'materias',
            canActivate:[LoggedGuard]
        },
        {
            component:MaestroComponent,
            path:'maestro/:id',
            canActivate:[LoggedGuard]
        },
        {
            path:'**',
            redirectTo:'/login',
            pathMatch:'full'
        }
    ];

export const ROUTE = RouterModule.forRoot(AppRoutes);