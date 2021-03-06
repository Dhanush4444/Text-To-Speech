import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ActivatedRcComponent} from './activated-rc/activated-rc.component';
import {SignUpComponent} from './sign-up/sign-up.component';


const routes: Routes = [
  {path: '', component: LoginpageComponent},
  {path: 'home', component: HomepageComponent, canActivate: [ActivatedRcComponent]},
  {path: 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
