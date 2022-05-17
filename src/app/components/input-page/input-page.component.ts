import { Component, OnInit } from '@angular/core';
import { DocumentReference, snapshotEqual } from 'firebase/firestore';
import { collectionChanges, collectionSnapshots} from "@angular/fire/firestore";
import { map } from 'rxjs/operators';
import sensor from "C:/Users/Ahmed/wastes/src/app/models/sensor"
import { DbService } from './../../services/db.service';
import waste from 'src/app/models/wastes';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent implements OnInit {
  was = new waste();
  tr =1;
  constructor(private db :DbService) { }

  ngOnInit(): void {
  }

  ref?: string;


  addNewWaste(number:number , sensor_id:number) {
    this.was.number = number;
    this.was.sensor_id = sensor_id;

    this.db.addNewDocument(this.was).then((ref: DocumentReference) => {
      console.log("Document Id: " + ref.id);
      this.ref = ref.id
    });
  }
}
