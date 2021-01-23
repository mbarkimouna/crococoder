import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';

import { AdminComponent } from './components/admin/admin.component';
import { AllMatchesComponent } from './components/all-matches/all-matches.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConteneurComponent } from './components/conteneur/conteneur.component';
import { DateMatchsComponent } from './components/date-matchs/date-matchs.component';
import { DifferentItemsComponent } from './components/different-items/different-items.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { EditAddComponent } from './components/edit-add/edit-add.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchComponent } from './components/match/match.component';
import { SignupComponent } from './components/signup/signup.component';
import { DisplayPlayerComponent } from './display-player/display-player.component';
import { EditMatchComponent } from './edit-match/edit-match.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';

const routes: Routes = [
{path: '' ,component: HomeComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'contact',component:ContactComponent},
{path:'add-match',component:EditAddComponent},
{path:'add-player',component:AddPlayerComponent},
{path:'all-matches',component:AllMatchesComponent},
{path:'match',component:MatchComponent},
{path:'admin',component:AdminComponent},
{path:'displayMatch/:id',component:DisplayMatchComponent},
{path:'editMatch/:id',component:EditAddComponent},
{path:'editPlayer/:id',component:EditPlayerComponent},
{path:'displayPlayer/:id',component:DisplayPlayerComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
