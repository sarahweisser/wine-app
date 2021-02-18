import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-wine-food-quiz',
  templateUrl: './wine-food-quiz.component.html',
  styleUrls: ['./wine-food-quiz.component.css']
})
export class WineFoodQuizComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  milkPreferences: Observable<string[]>;
  quizForm: FormGroup;
  milkPreference = new FormControl();
  likesCoffee = new FormControl();


  ngOnInit(): void {
    this.milkPreferences = this.dataService.getMilkPreferences();
    this.quizForm = new FormGroup({
      milkPreference: this.milkPreference,
      likesCoffee: this.likesCoffee
    });
  }

  submitQuiz() {
    console.log('in quiz submit: ', this.quizForm.value);
    this.router.navigate(['/logged-in-home']);
  }
}
