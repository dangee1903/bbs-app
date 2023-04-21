import { initializeApp } from 'firebase/app'
import { getMessaging, isSupported } from 'firebase/messaging'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB8Di7YBxcZoikAMFIS9bvFfPmoS2XWhKM',
  authDomain: 'test-bbs-app-d9d0d.firebaseapp.com',
  projectId: 'test-bbs-app-d9d0d',
  storageBucket: 'test-bbs-app-d9d0d.appspot.com',
  messagingSenderId: '483219705334',
  appId: '1:483219705334:web:e8d0c63582a8807766cbd7',
  measurementId: 'G-MYHFP2SP3F',
}

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP)
let messaging = null

isSupported().then(result => {
  if (result) {
    messaging = getMessaging(FIREBASE_APP)
  }
})

export const mess = messaging
export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP)
