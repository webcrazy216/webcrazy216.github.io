import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GoalComponent } from './pages/goal/goal.component';
import { AchieveComponent } from './pages/achieve/achieve.component';
import { PeopleComponent } from './pages/people/people.component';
import { MainComponent } from './pages/main/main.component';
import { NewComponent } from './pages/goal/new/new.component';
import { ValueComponent } from './pages/goal/value/value.component';
import { GroupComponent } from './pages/goal/group/group.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoalComponent,
    AchieveComponent,
    PeopleComponent,
    MainComponent,
    NewComponent,
    ValueComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
