import  waste  from 'src/app/models/wastes';
import { Injectable } from "@angular/core";
import { addDoc, Firestore, collection, doc, updateDoc, setDoc, getDoc } from "@angular/fire/firestore";
import sensor from "C:/Users/Ahmed/wastes/src/app/models/sensor";

@Injectable({
  providedIn: 'root'
})
export class DbService {
  constructor(private db: Firestore) {

  }
getAll(type : string) {
  return collection(this.db, type);
}
addNewDocument(user: waste) {
  const dbInstance = collection(this.db, "wastes");
  return addDoc(dbInstance, { ...user });
}

}
