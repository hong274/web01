import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ServiesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

import { RouterModule, Routes } from '@angular/router';
import appRoutes from './routerConfig';
import { LoginFormComponent } from './user/login-form/login-form.component';
import { BusinessContactsComponent } from './user/business-contacts/business-contacts.component';
import { LoginViewComponent } from './user/login-view/login-view.component';
import { FormsModule } from '@angular/forms';
import { ContactListComponent } from './contact-list/contact-list.component';

import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  { path: 'contacts', component: BusinessContactsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent,ProjectComponent,ServiesComponent,ContactComponent, LoginFormComponent, BusinessContactsComponent, LoginViewComponent, ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
