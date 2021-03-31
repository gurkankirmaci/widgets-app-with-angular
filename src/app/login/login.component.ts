import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from '../shared/notifications.service';

interface Login {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(private fb: FormBuilder,
              private ns: NotificationsService) { }

  ngOnInit() {
    this.login = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit({value, valid}: {value: Login, valid: boolean}) {
    //console.log('VALUE',value);
    //console.log('VALID',valid);
    this.ns.emit(`${value.username} just login !`);
    this.reset();
  }


  reset() {
    this.login.reset({
      username: '',
      password: ''
    });
  }

}
