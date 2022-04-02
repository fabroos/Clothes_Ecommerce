import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../firebase/config'

export const getNotices = () => {
  const db = getFirestore(app)
  const queryDoc = collection(db, 'noticias')
  return getDocs(queryDoc)
}
