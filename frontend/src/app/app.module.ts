import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SelectCompanyComponent } from './select-company/select-company.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserRegistryComponent } from './user-registry/user-registry.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CreateProjectComponent } from './components/modals/create-project/create-project.component';
import { CreateTeamComponent } from './components/modals/create-team/create-team.component';
import { CreateEditProjectComponent } from './components/modals/create-edit-project/create-edit-project.component';
import { CreateUserComponent } from './components/modals/create-user/create-user.component';
import { AnnouncementComponent } from './home/announcement/announcement.component';
import { TeamComponent } from './teams/team/team.component';
import { ProjectComponent } from './projects/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectCompanyComponent,
    HomeComponent,
    TeamsComponent,
    ProjectsComponent,
    UserRegistryComponent,
    NavBarComponent,
    CreateProjectComponent,
    CreateTeamComponent,
    CreateEditProjectComponent,
    CreateUserComponent,
    AnnouncementComponent,
    TeamComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
