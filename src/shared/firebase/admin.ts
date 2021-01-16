import firebaseAdmin from 'firebase-admin'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebaseAdmin.apps.length) {
	firebaseAdmin.initializeApp({
		credential: firebaseAdmin.credential.cert(
			JSON.parse(process.env.adminSecret)
		),
		databaseURL: process.env.NEXT_PUBLIC_databaseURL,
	})
}

export default firebaseAdmin
