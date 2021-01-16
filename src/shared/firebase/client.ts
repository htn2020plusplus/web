import firebase from 'firebase'

import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
	const CLIENT_CONFIG = {
		apiKey: process.env.NEXT_PUBLIC_apiKey,
		authDomain: process.env.NEXT_PUBLIC_authDomain,
		databaseURL: process.env.NEXT_PUBLIC_databaseURL,
		projectId: process.env.NEXT_PUBLIC_projectId,
		storageBucket: process.env.NEXT_PUBLIC_storageBucket,
		messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
		appId: process.env.NEXT_PUBLIC_appId,
		measurementId: process.env.NEXT_PUBLIC_measurementId,
	}

	firebase.initializeApp(CLIENT_CONFIG)
	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
	;(window as any).firebase = firebase
}

export default firebase
