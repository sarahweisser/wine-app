import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent implements OnInit {

  constructor (
    private userService: UserService,
    private dataService: DataService,
    private router: Router 
  ) { }

  userform: FormGroup;
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  nameTitle = new FormControl();

  nameTitles: Observable<string[]>;
  formValidationErrorMessages;

  showEmailDuplicateWarning: boolean;
  showValidationErrors: boolean = false;

  ngOnInit(): void {
    this.nameTitles = this.dataService.getNameTitles();
    this.formValidationErrorMessages = this.dataService.getFormValidationMessages();
    this.userform = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      nameTitle: this.nameTitle
    });
  }
     
  save() {
    // at this point all client form validation for syntax and required fields should be finished
    // check for duplicate email subission will be performed in service
    // status: 406 - will be returned in case of duplicate email submission
    this.showEmailDuplicateWarning = false;
    console.log('in registration onsubmit: ', this.userform.value);
    this.userService.createUser(this.userform.value).subscribe(
      data => {
        this.userform.reset();
        console.log('submitted');
        this.router.navigate(['/logged-in-home']);
        return true;
      },
      error => {
        // TODO handle other specific service errors
        if (error.status === 406) {
          this.showEmailDuplicateWarning = true;
        }
        console.log("There was an error with submission.");
      }
    )
  }
}
