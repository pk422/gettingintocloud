import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import {NgFor} from '@angular/common';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';
import { PostsService } from './posts.service';
import { LoginComponent } from './login/login.component';
import { RatingComponent } from './rating/rating.component';
import { LoginService } from './login.service';
import { AlertService } from './alert.service';
import { NewpostComponent } from './newpost/newpost.component';
// Define the routes


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    LoginComponent,
    RatingComponent,
    RegisterComponent,
    NewpostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   routing // Add routes to the app
  ],
  providers: [PostsService, LoginService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
