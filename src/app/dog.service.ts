import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Dog } from './models/dog';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

type DogsResponse = {
  dogs: Dog[];
}
type DogResponse = {
  dog: Dog;
}

const dogsEndpoint = `${environment.baseApiUrl}/dogs`;

@Injectable({
  providedIn: 'root'
})
export class DogService {



   constructor(private http: HttpClient) {}

   fetchDogs() {
    return this.http.get<DogsResponse>(dogsEndpoint);
   }

   addDog(dog: Dog) {
    return this.http.post<DogResponse>(`${environment.baseApiUrl}/dogs`, dog)
   }

}
