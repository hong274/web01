import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ServiesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginFormComponent } from './user/login-form/login-form.component';
import { BusinessContactsComponent } from './user/business-contacts/business-contacts.component';
import { LoginViewComponent } from './user/login-view/login-view.component';




const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'services',
    component: ServiesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'user/login-form',
    component: LoginFormComponent,
  },
  { 
    path: 'user/business-contacts', 
    component: BusinessContactsComponent,
  },
  { 
    path: 'user/login-view', 
    component: LoginViewComponent,
  }

];

export default appRoutes;