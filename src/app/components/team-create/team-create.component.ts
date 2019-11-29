import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})

export class TeamCreateComponent implements OnInit {  
  submitted = false;
  teamForm: FormGroup;
  TeamColor:any = [
      'Green',
      'Red',
      'Blue',
      'Gold',
      'Black',
      'Blue'
    ];
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.teamForm = this.fb.group({
      name: ['', [Validators.required]],
      color: ['', [Validators.required]]
    })
  }

  // Choose position with select dropdown
  updateColor(e){
    this.teamForm.get('color').setValue(e, {
      onlySelf: true
    });
  }

  // Getter to access form control
  get myForm(){
    return this.teamForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.teamForm.valid) {
      return false;
    } else {
      this.apiService.createTeam(this.teamForm.value).subscribe(
        (res) => {
          console.log('Team successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/team-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
