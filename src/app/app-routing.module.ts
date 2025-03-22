import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component'; 

const routes: Routes = [
  
  //{ path: '',loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) },
  //{ path: 'login',loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '', component: WelcomeComponent},
  { path: 'home', component:HomeComponent }

];

export const routing = RouterModule.forRoot(routes, { enableTracing: false });
@NgModule({   
  imports: [routing],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
