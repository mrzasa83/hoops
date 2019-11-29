import { Player } from './../../model/Player';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})

export class PlayerEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  employeeData: Player[];
  PlayerPosition: any = ['Guard', 'Swingman', 'Power Forward']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updatePlayer();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getPlayer(id);
    this.editForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['',[Validators.required]],
      email: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      position: ['', [Validators.required]],
      phoneNumber: ['', [Validators.pattern('^[0-9]+$')]]
    })
  }

  // Choose options with select-dropdown
  updatePosition(e) {
    this.editForm.get('position').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getPlayer(id) {
    this.apiService.getPlayer(id).subscribe(data => {
      this.editForm.setValue({
        firstname: data['firstname'],
        lastname: data['lastname'],
        email: data['email'],
        position: data['position'],
        phoneNumber: data['phoneNumber'],
      });
    });
  }

  updatePlayer() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      position: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updatePlayer(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/player-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}