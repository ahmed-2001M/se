import { Component, OnInit } from '@angular/core';
import { snapshotEqual } from 'firebase/firestore';
import { collectionChanges, collectionSnapshots} from "@angular/fire/firestore";
import { map } from 'rxjs/operators';
import sensor from "C:/Users/Ahmed/wastes/src/app/models/sensor"
import { DbService } from './../../services/db.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  all_sensors: any[] = [];
  constructor(private db :DbService) { }

  ngOnInit(): void {
    this.show()
    console.log(this.all_sensors[0])
  }


  show(){
    collectionSnapshots(this.db.getAll('sensor')).pipe(
      map((changes) => {
        return changes.map((c) => {
          console.log("Current data: ", c.data());
          return ({...c.data() })
        })
      })
    ).subscribe(data => {
      const sen = new sensor()
      for (var val of data){
        sen['name'] = val['name']
        sen['site'] = val['site']
        sen['state'] = val['state']
        sen['duration'] = val['date']
        this.all_sensors.push(sen)
      }
    });
  }

}
