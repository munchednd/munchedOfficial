import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

//Initialize Firebase
const app = firebase.initializeApp({
    apiKey: "AIzaSyCbK43PJ0xZM7ZyJd8ftB6XGxHVF3Z-3SY",
    authDomain: "munched-e572d.firebaseapp.com",
    databaseURL: "https://munched-e572d.firebaseio.com",
    projectId: "munched-e572d",
    storageBucket: "munched-e572d.appspot.com",
    messagingSenderId: "220169365412"
})

const db = firebase.database(app)
const base = Rebase.createClass(db)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

export default base