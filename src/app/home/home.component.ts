import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: RestService ,private route :Router) { }

  loginForm = new FormGroup({
    mname: new FormControl('')
  });


  ngOnInit() {

  }


  submit() {
    
    
    this.http.changedata(this.loginForm.value);
    
   
  }
}
