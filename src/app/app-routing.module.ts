import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerCreateComponent } from './components/player-create/player-create.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerEditComponent } from './components/player-edit/player-edit.component';

import { TeamCreateComponent } from './components/team-create/team-create.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamEditComponent } from './components/team-edit/team-edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-player' },
  { path: 'create-player', component: PlayerCreateComponent },
  { path: 'edit-player/:id', component: PlayerEditComponent },
  { path: 'player-list', component: PlayerListComponent },  
  { path: 'create-team', component: TeamCreateComponent },
  { path: 'edit-team/:id', component: TeamEditComponent },
  { path: 'team-list', component: TeamListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }