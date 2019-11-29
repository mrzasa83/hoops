import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})

export class TeamListComponent implements OnInit {
  
  Team:any = [];

  constructor(private apiService: ApiService) { 
    this.readTeam();
  }

  ngOnInit() {}

  readTeam(){
    this.apiService.getTeams().subscribe((data) => {
     this.Team = data;
    })    
  }

  removePlayer(team, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteTeam(team._id).subscribe((data) => {
          this.Team.splice(index, 1);
        }
      )    
    }
  }

}