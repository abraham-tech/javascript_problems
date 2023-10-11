import { Component } from '@angular/core';
import { DogServiceService } from './dog-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dogServiceService: DogServiceService){}
  dogs: any;
  next: any;

  sendGetRequest() {
    this.dogServiceService.getRequest( this.next).subscribe((response) => {
      console.log('Response:', response);
      this.dogs = response.data;
      this.next = response.links.next;

    });
  }
  
}
