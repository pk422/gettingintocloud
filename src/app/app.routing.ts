import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { LoginComponent } from './login/login.component';
import { RatingComponent } from './rating/rating.component';
import { LoginService } from './login.service';
import { AlertService } from './alert.service';
import { RegisterComponent } from './register/register.component';
import { NewpostComponent } from './newpost/newpost.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'newpost', component: NewpostComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);