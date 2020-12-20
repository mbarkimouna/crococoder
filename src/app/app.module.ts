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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
