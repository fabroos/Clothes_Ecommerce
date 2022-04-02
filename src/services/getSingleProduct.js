import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { app } from '../firebase/config'

export const getSingleProduct = id => {
  const db = getFirestore(app)
  const queryDoc = doc(db, 'productos', id)

  return getDoc(queryDoc)
}
