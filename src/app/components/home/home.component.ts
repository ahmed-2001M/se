import sensor from "C:/Users/Ahmed/wastes/src/app/models/sensor"
import { DbService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';
import { collectionChanges, collectionSnapshots} from "@angular/fire/firestore";
import { map } from 'rxjs/operators';

import { snapshotEqual } from 'firebase/firestore';
import waste from 'src/app/models/wastes';
import { identifierName } from "@angular/compiler";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  all_sensors: any[];
  all_wastes: any[];

  constructor(private db :DbService) {
    this.all_sensors=[];
    this.all_wastes=[];
  }

  ngOnInit(): void {
    this.show_sensors()
    this.show_wastes()
    console.log(this.all_wastes)
  }

  show_sensors(){
    collectionSnapshots(this.db.getAll('sensor')).pipe(
      map((changes) => {
        return changes.map((c) => {
          console.log("Current data: ", c.data());
          return ({...c.data() })
        })
      })
    ).subscribe(data => {
      this.all_sensors.splice(0);
      this.all_sensors = data

    });
  }



  show_wastes(){
    collectionSnapshots(this.db.getAll('wastes')).pipe(
      map((changes) => {
        return changes.map((c) => {
          console.log("Current data: ", c.data());
          return ({...c.data() })
        })
      })
    ).subscribe(data => {
      this.all_wastes.splice(0);
      this.all_wastes = data

    });
  }

}
