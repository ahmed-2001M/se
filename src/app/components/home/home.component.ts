import sensor from "C:/Users/Ahmed/wastes/src/app/models/sensor"
import { DbService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';
import { collectionChanges, collectionSnapshots} from "@angular/fire/firestore";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    // console.log(this.all_sensors)
  }



}
