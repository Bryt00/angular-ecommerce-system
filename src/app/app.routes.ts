import { Routes } from '@angular/router';
import { LandingPage } from './features/shared/presentation/pages/landing-page/landing-page';
import { Signup } from './features/authentication/presentation/pages/signup/signup';
import { Login } from './features/authentication/presentation/pages/login/login';

export const routes: Routes = [
    {path: '', component: LandingPage},
    {path:"register", component:Signup},
    {path:"login", component:Login}
];