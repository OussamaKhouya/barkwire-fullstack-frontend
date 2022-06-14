import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';
import { Dog } from './models/dog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 dogs : Dog[] = [];

 constructor(private dogService: DogService) {

 }
  ngOnInit(): void {
    this.dogService.fetchDogs().subscribe( response => {
      this.dogs = response.dogs;
    });
  }
}
