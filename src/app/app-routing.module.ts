import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AdminComponent } from './components/admin/admin.component';
import { AllMatchesComponent } from './components/all-matches/all-matches.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConteneurComponent } from './components/conteneur/conteneur.component';
import { DateMatchsComponent } from './components/date-matchs/date-matchs.component';
import { DifferentItemsComponent } from './components/different-items/different-items.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchComponent } from './components/match/match.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
{path: '' ,component: HomeComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'contact',component:ContactComponent},
{path:'add-match',component:AddMatchComponent},
{path:'all-matches',component:AllMatchesComponent},
{path:'match',component:MatchComponent},
{path:'admin',component:AdminComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
