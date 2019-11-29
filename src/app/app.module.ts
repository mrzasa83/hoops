import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlayerCreateComponent } from './components/player-create/player-create.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerEditComponent } from './components/player-edit/player-edit.component';

import { TeamCreateComponent } from './components/team-create/team-create.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamEditComponent } from './components/team-edit/team-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCreateComponent,
    PlayerListComponent,
    PlayerEditComponent,
    TeamCreateComponent,
    TeamListComponent,
    TeamEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }