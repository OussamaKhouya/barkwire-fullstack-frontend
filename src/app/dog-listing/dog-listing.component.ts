import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-listing',
  templateUrl: './dog-listing.component.html',
  styleUrls: ['./dog-listing.component.scss']
})
export class DogListingComponent implements OnInit {

  @Input() name!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
