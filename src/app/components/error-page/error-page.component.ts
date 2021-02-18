import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }

  formValidationErrorMessages;
  currentErrorMessage;

  ngOnInit(): void {
    this.formValidationErrorMessages = this.dataService.getFormValidationMessages();
    this.currentErrorMessage = this.formValidationErrorMessages.defaultErrorMessage;
  }

  logOut() {
    this.router.navigate(['/']);
  }
}
