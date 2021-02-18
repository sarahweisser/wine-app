import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.css']
})
export class UserLoginFormComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }

  userLoginForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);

  formValidationErrorMessages;

  ngOnInit(): void {
    this.formValidationErrorMessages = this.dataService.getFormValidationMessages();
    this.userLoginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  save() {
    // TODO password validation
    console.log('in login onsubmit: ', this.userLoginForm.value);
    this.router.navigate(['/logged-in-home']);
  }

}
