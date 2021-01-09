import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { BlogComponent } from './components/blog/blog.component';
import { ResultsComponent } from './components/results/results.component';
import { ConteneurComponent } from './components/conteneur/conteneur.component';
import { DifferentItemsComponent } from './components/different-items/different-items.component';
import { DateMatchsComponent } from './components/date-matchs/date-matchs.component';
import { VideosComponent } from './components/videos/videos.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllMatchesComponent } from './components/all-matches/all-matches.component';
import { MatchComponent } from './components/match/match.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AdminComponent } from './components//admin/admin.component';
import { DataService } from './services/data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    LatestNewsComponent,
    BlogComponent,
    ResultsComponent,
    ConteneurComponent,
    DifferentItemsComponent,
    DateMatchsComponent,
    VideosComponent,
    ContactComponent,
    HomeComponent,
    AllMatchesComponent,
    MatchComponent,
    AddMatchComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
