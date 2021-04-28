<template>
  <q-page class="flex flex-center">
    <!--auth signin-->
    <q-btn v-if="!$store.state.auth.isAuthenticated"
      @click.prevent="signIn"
      color="white"
      text-color="primary"
      icon="person"
      label="ACCEDER" />
    <div v-else>
      <p class="text-h6">Bienvenido a bordo!</p>
      <q-btn
        to="/dash"
        color="primary"
        label="PANEL DE CONTROL"
        push
        v-close-popup/>
    </div>
  </q-page>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import firebase from 'firebase'

export default {
  setup() {
    const signIn = () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(result => {
        console.log('signIn!', result)
        //useRouter.push({ path: '/dash' })
      }).catch(error => {
        alert(error)
      })
    }
    //const router = useRouter()
    const goToDash = () => {
      //console.log("web p")
      //router.push({ path: `/dash` })
    }

    onMounted(goToDash)

    return {signIn}
  }
}
</script>