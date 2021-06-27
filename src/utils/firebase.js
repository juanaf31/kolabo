import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAI12OJP7qQAKNxmmr26dbTL50O0Z8X3Ao',
	authDomain: 'test-kolabo.firebaseapp.com',
	projectId: 'test-kolabo',
	storageBucket: 'test-kolabo.appspot.com',
	messagingSenderId: '216736519734',
	appId: '1:216736519734:web:baaed186f6be6922df2a97',
	measurementId: 'G-0W7HN6VQ2G',
	databaseURL: 'https://test-kolabo.firebaseio.com'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
