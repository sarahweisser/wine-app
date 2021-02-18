import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

// this file is acting as a placeholder for data that may be retrieved through service calls in the future


@Injectable({
    providedIn: 'root'
  })
export class DataService {
    constructor(private http:HttpClient) {

    }

    getNameTitles(): Observable<string[]> {
      return of(['None', 'Dr.', 'Mr.', 'Mrs.', 'Ms.']);
    }

    getMilkPreferences(): Observable<string[]> {
      return of(['', 'Whole', '2%', 'Skim']);
    }

    getFormValidationMessages() {
      return {
        defaultErrorMessage: "There has been an error.",
        requiredFieldMissing: "This information is required.  Please enter a value.",
        invalidSyntaxMessage: "Please use the correct syntax.",
        duplicateEmailWarning: "This email is in use. Please resubmit with an unused email address."
      };
    }

    getWineFacts(): string[] {
      return [
        "Wine fact 1",
        "Wine fact 2",
        "Wine fact 3",
        "Wine fact 4",
        "Wine fact 5"
      ];
    }

    getWineTerminology(): string[] {
      return [
        "Wine term 1",
        "Wine term 2",
        "Wine term 3",
        "Wine term 4",
        "Wine term 5"
      ];
    }
}