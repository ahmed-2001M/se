import { Injectable } from "@angular/core";
import { addDoc, Firestore, collection, doc, updateDoc, setDoc, getDoc } from "@angular/fire/firestore";
import sensor from "C:/Users/Ahmed/wastes/src/app/models/sensor";

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private dbInstance = collection(this.db, "sensor");
  constructor(private db: Firestore) {

  }
getAll(type : string) {
  return collection(this.db, type);
}

}
