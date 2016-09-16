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

//Providers
import { RoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    UserDetailsComponent,
    UserEditComponent
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
