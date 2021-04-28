import fb from '../services/firebase'

export default async ({router, store}) => {
  fb.init(process.env.QENV.FIREBASE_CONFIG)
  // Tell the application what to do when the 
  // authentication state has changed
  fb.auth().onAuthStateChanged((user) => {
    //store.commit('auth/setAuthState', { user })
    //store.state.user = user || null
    fb.handleOnAuthStateChanged(router, store, user)
  }, (error) => {
    console.error(error)
  })

  //$q.$fb = fb
  //store.$fb = fb
}