/**
 * Application Router module
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SidenavComponent} from "./_includes/navigation/sidenav.component";
import {HeaderComponent} from "./_includes/header/header.component";
import {FooterComponent} from "./_includes/footer/footer.component";
import {HomeComponent} from "./components/home/home.component";
import {PageNotFoundComponent} from "./components/404/404.component";
import {LoginComponent} from "./components/login/login.component";
import {ForgotComponent} from "./components/forgot/forgot.component";


//Application Routes
const routes: Routes = [

    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
        component: LoginComponent
    },

    {
        path: 'login',
        component: HomeComponent,
        data: {
            title: 'Login'
        }
    },

    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'Home'
        }
    },

    {
        path: '**',
        component: PageNotFoundComponent
    }

];


//Exporting all my page components as a PageComponent constant
export const PageComponents = [HomeComponent, PageNotFoundComponent, HeaderComponent, FooterComponent, SidenavComponent, LoginComponent, ForgotComponent];

//AppRouter NgModule
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

//Exporting the AppRouterModule
export class AppRouterModule {

}

