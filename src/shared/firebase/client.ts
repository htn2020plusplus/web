import firebase from 'firebase'

import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
	// const CLIENT_CONFIG = {
	// 	apiKey: process.env.NEXT_PUBLIC_apiKey,
	// 	authDomain: process.env.NEXT_PUBLIC_authDomain,
	// 	databaseURL: process.env.NEXT_PUBLIC_databaseURL,
	// 	projectId: process.env.NEXT_PUBLIC_projectId,
	// 	storageBucket: process.env.NEXT_PUBLIC_storageBucket,
	// 	messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
	// 	appId: process.env.NEXT_PUBLIC_appId,
	// 	measurementId: process.env.NEXT_PUBLIC_measurementId,
	// }

	const CLIENT_CONFIG = {
		apiKey: 'AIzaSyCIPJcv9kU4FCfE4V4NkkWHpD1bjW-OeY8',
		authDomain: 'legist-dev.firebaseapp.com',
		projectId: 'legist-dev',
		storageBucket: 'legist-dev.appspot.com',
		messagingSenderId: '966793692438',
		appId: '1:966793692438:web:ffe94d13b35f322f843c37',
		measurementId: 'G-C3XBLVGFKH',
	}

	firebase.initializeApp(CLIENT_CONFIG)
	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
	;(window as any).firebase = firebase
}

export default firebase
