import {
  collection,
  getFirestore,
  serverTimestamp,
  addDoc
} from 'firebase/firestore'
import { app } from '../firebase/config'

// Add a new document in collection "cities"
export function setOrder (order) {
  const db = getFirestore(app)
  return addDoc(collection(db, 'orders'), {
    ...order,
    date: serverTimestamp()
  })
}
