import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Object;
  objectKeys = Object.keys;
  purchase: string;

  constructor(private data: DataService) { this.purchase = ""; }

  ngOnInit() {
    this.data.getItems().subscribe(data => {
        this.items = data
      }
    );
  }

  inStock = function (i) {
    if (this.items.Items[i].size.small != '0') {
      return true;
    }
    if (this.items.Items[i].size.medium != '0') {
      return true;
    }
    if (this.items.Items[i].size.large != '0') {
      return true;
    }
    return false;
  }

  purchaseHandle = function(i) {
    this.purchase = "You have purchased a " + this.items.Items[i].colour + " " + this.items.Items[i].name;
  }
}
