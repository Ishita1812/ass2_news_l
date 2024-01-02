import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CardComponent } from './components/dashboard/card/card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PoliticesComponent } from './components/politics/politices/politices.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { ScienceComponent } from './components/science/science.component';
import { SciencesComponent } from './components/science/sciences/sciences.component';
import { SportComponent } from './components/sports/sport/sport.component';
import { SportsComponent } from './components/sports/sports.component';

const routes: Routes = [{path:'', component: DashboardComponent},
{path:'home',component:DashboardComponent},

{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},

{path:'card/:id', component: CardComponent},

{ path: 'courses', component: PoliticsComponent},

{ path: 'courses/course/:id', component: PoliticesComponent },

{path: 'science', component:ScienceComponent},
{path:'science/sciences/:id', component:SciencesComponent},



{path:'sports',component:SportsComponent},
{path:'sports/sport/:id', component:SportComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
