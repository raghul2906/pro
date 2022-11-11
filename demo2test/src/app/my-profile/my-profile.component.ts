import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,  FormGroup, Validators} from '@angular/forms';
import {  ProfileService } from '../service/profile.service';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit  {
  form: FormGroup;
  submitted = false;
  router: any;
  quoteText: string;
  registerForm: any;
  profileResult : any;
  profileList : any;
  body : any;

  constructor(private formBuilder: FormBuilder , public profileservice : ProfileService ) {}


ngOnInit(): void {
  this.getProfiles();
  this.form = this.formBuilder.group(
    {
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)
        ]
      ],
      lastname: [
        '',
        [
          Validators.required,
        ]
      ],
      'region': [],
      email: ['', [Validators.required, Validators.email]],
    }
  );

}

get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}

model : any ;


  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
  }


  onReset(): void {
    this.submitted = false;
    this.form.reset();
  } 

  onaddDetails() : any {
    if (this.form.valid) {
      this.body = this.form.value;
      this.profileservice.createProfile(this.body).subscribe((response: any) => {
        console.log(response);
      });
    }
  }

     getProfiles() {
      this.profileservice. getProfiles().subscribe((data : any[]) => {
         this.profileResult = data;
         this.profileList = this.profileResult.results;
         console.log(this.profileResult);
      });
    }

}


 



