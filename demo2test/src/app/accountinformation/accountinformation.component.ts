
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,  FormGroup, Validators} from '@angular/forms';
import { AccountService } from '../service/api.service';

@Component({
  selector: 'app-accountinformation',
  templateUrl: './accountinformation.component.html',
  styleUrls: ['./accountinformation.component.css']
})
export class AccountinformationComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  router: any;
  quoteText: string;
  registerForm: any;
  accountResult : any;
  accountList : any;
  body : any;

  constructor(private formBuilder: FormBuilder ,  public accountservice : AccountService) {}

  ngOnInit(): void {
    this.getAccounts();
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
        email: ['', [Validators.required, Validators.email]],
        mob: ['', [Validators.required,Validators.pattern('^[0-9]*$')]]
      }
    );
  
  }
  

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

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
      this.accountservice.createAccount(this.body).subscribe((response: any) => {
        console.log(response);
      });
    }
  }
  getAccounts() {
    this.accountservice. getAccounts().subscribe((data : any[]) => {
       this.accountResult = data;
       this.accountList = this.accountResult.results;
       console.log(this.accountResult);
    });
  }

}
