import { Team } from './../../model/Team';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})

export class TeamEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  teamData: Team[];
  Color: any = ['Red', 'Blue', 'Green', 'Gold', 'White', 'Black'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateTeam();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getTeam(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      color: ['', [Validators.required]]
    })
  }

  // Choose options with select-dropdown
  updateColor(e) {
    this.editForm.get('color').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getTeam(id) {
    this.apiService.getTeam(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        color: data['color']
      });
    });
  }

  updateTeam() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      color: ['', [Validators.required]],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateTeam(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/team-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}