import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './config';


export const firebaseApp = initializeApp(firebaseConfig)
// export const firebaseAnalytics = getAnalytics(firebaseApp)
export const firebaseFirestore = getFirestore(firebaseApp)
export const firebaseAuth = getAuth(firebaseApp)
