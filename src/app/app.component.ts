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

  addDog(newDog: Dog) {
   this.dogService.addDog(newDog).subscribe(response => {
     this.dogs = [response.dog , ...this.dogs]
   })
   console.log(newDog)
  }
}
