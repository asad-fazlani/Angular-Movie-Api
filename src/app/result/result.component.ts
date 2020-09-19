import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private http: RestService) { }
  data: any
  ngOnInit(): void {
    this.http.GetData().subscribe(
      query => {
        this.data = query
        console.log(this.data);

      });
    console.log(this.data);
  }

}
