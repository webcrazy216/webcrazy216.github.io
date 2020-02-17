import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalComponent } from './pages/goal/goal.component';
import { AchieveComponent } from './pages/achieve/achieve.component';
import { PeopleComponent } from './pages/people/people.component';
import { MainComponent } from './pages/main/main.component';

import { NewComponent } from './pages/goal/new/new.component';
import { ValueComponent } from './pages/goal/value/value.component';
import { GroupComponent } from './pages/goal/group/group.component';

const routes: Routes = [

  {
    path: 'goal',
    component: GoalComponent,
    children: [
      {
        path: 'new',
        component: NewComponent
      },
      {
        path: 'value',
        component: ValueComponent
      }
    ]
  },
  {
  path: '',
  component: MainComponent
  },
  {
    path: 'coaching',
    component: AchieveComponent,
  },
  {
    path: 'user',
    component: PeopleComponent,
  },
  {
    path: 'goalGroup',
    component: GroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
