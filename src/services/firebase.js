import firebase from 'firebase/app'
import 'firebase/auth'

const init = async (config) => {
  return firebase.initializeApp(config)
}

const auth = () => {
  return firebase.auth()
}

const getAuth = () => {
  return firebase.auth
}

const signOut = () => {
  return auth().signOut()
}

const isAuthenticated = (store) => {
  return store.state.auth.isAuthenticated
}

const handleOnAuthStateChanged = async (router, store, user) => {
  const initialAuthState = isAuthenticated(store)
  if (user && initialAuthState) {
    console.log("go to dash")
    //router.push({ path: '/dash' })
  }
  // Save to the store
  store.commit('auth/setAuthState', {
    isAuthenticated: user !== null,
    user: user
  })

  // If the user loses authentication route
  // them to the login page
  if (!user && initialAuthState) {
    store.commit('auth/setAuthState', {
      isAuthenticated: false,
      user: false
    })
    router.push({ path: '/' })
  }

}

const ensureAuthIsInitialized = async (store) => {
    console.log(store)
  if (store.state.auth.isReady) return true
  // Create the observer only once on init
  return new Promise((resolve, reject) => {
    // Use a promise to make sure that the router will eventually show the route after the auth is initialized.
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      resolve()
      unsubscribe()
    }, () => {
      reject(new Error('Looks like there is a problem with the firebase service. Please try again later'))
    })
  })
}

export default {
	auth,
	init,
	signOut,
	isAuthenticated,
	handleOnAuthStateChanged,
	ensureAuthIsInitialized
}