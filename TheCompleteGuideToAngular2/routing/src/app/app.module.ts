//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home.component';
import { UserDetailsComponent } from './user/user-details.component';
import { UserEditComponent } from './user/user-edit.component';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';

//Providers
import { RoutingModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    UserDetailsComponent,
    UserEditComponent,
    InvalidUrlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
