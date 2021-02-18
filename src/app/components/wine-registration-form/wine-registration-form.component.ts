import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { WineService } from '../../services/wine.service';

@Component({
  selector: 'app-wine-registration-form',
  templateUrl: './wine-registration-form.component.html',
  styleUrls: ['./wine-registration-form.component.css']
})
export class WineRegistrationFormComponent implements OnInit {
  
  // Once server side model is updated, this model will need to be changed

  wineform: FormGroup;
  name = new FormControl('', Validators.required);
  purchasePrice = new FormControl('', Validators.required);
  purchaseDate = new FormControl('', Validators.required);
  red = new FormControl();
  formValidationErrorMessages;
  showValidationErrors: boolean = false;


  constructor(private wineService: WineService,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit(): void {
    this.formValidationErrorMessages = this.dataService.getFormValidationMessages();
    this.wineform = new FormGroup({
      name: this.name,
      purchasePrice: this.purchasePrice,
      purchaseDate: this.purchaseDate,
      red: this.red
    });
  }

  onSubmit() {
    console.log('in submitWine: ', this.wineform.value);
    if (this.wineform.valid) {
      this.wineService.createWine(this.wineform.value).subscribe(
        data => {
          this.wineform.reset();
          this.router.navigate(['/logged-in-home/admin']);
          return true;
        },
        error => {
          this.router.navigate(['/error']);
          // TODO error handling and user notification
        }
      )
    } 
  }

}
