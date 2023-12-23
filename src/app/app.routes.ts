import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IsleComponent } from './pages/isle/isle.component';
import { ParticipantsComponent } from './pages/participants/participants.component';

export const routes: Routes = [
  {path:"",component:HomeComponent, pathMatch:'full'},
  {path:"participants", component:ParticipantsComponent},
  {path:"isle", component:IsleComponent, children:
    [{
      path:':id',component:IsleComponent
    }]
  }
];
