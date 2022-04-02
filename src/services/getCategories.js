import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../firebase/config'

export const getCategories = () => {
  const db = getFirestore(app)
  const queryDoc = collection(db, 'categorias')
  return getDocs(queryDoc)
}
