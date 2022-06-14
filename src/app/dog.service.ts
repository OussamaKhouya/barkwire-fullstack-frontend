import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Dog } from './models/dog';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

type DogsResponse = {
  dogs: Dog[];
}

const dogsEndpoint = `${environment.baseApiUrl}/dogs`;

@Injectable({
  providedIn: 'root'
})
export class DogService {

  dogs : Dog[] = [
    {
      name: "Bixby",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dog_Breeds.jpg/800px-Dog_Breeds.jpg",
      description: "Just the best woff!"

    },
    {
      name: "Bixby",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dog_Breeds.jpg/800px-Dog_Breeds.jpg",
      description: "Just the best woff!"

    },
    {
      name: "Bixby",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dog_Breeds.jpg/800px-Dog_Breeds.jpg",
      description: "Just the best woff!"

    }
   ]

   constructor(private http: HttpClient) {}

   fetchDogs() {
    return this.http.get<DogsResponse>(dogsEndpoint);
   }


}
