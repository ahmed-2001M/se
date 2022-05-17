import { Component, OnInit } from '@angular/core';

import { snapshotEqual } from 'firebase/firestore';
import { collectionChanges, collectionSnapshots} from "@angular/fire/firestore";
import { map } from 'rxjs/operators';
import sensor from "C:/Users/Ahmed/wastes/src/app/models/sensor"
import { DbService } from './../../services/db.service';
import waste from 'src/app/models/wastes';


@Component({
  selector: 'app-sensor3',
  templateUrl: './sensor3.component.html',
  styleUrls: ['./sensor3.component.css']
})
export class Sensor3Component implements OnInit {
  all_sensors: any[] ;
  all_wastes: any[] ;

  constructor(private db :DbService) {
    this.all_sensors=[];
    this.all_wastes=[];
  }

  ngOnInit(): void {
    this.show_sensors()
    this.show_wastes()
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
      for (var val of data){
        if(val['id']==3){

        this.all_sensors.push(val)
        }
      }
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
      for (var val of data){
        if(val ['sensor_id'] == 3){
        this.all_wastes.push(val)
        }
      }
    });
  }

}
