<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-2">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          {{$store.state.admin.title}}
        </q-toolbar-title>

        <!--auth signin-->
        <q-btn v-if="!$store.state.auth.isAuthenticated"
          @click.prevent="signIn"
          color="white"
          text-color="primary"
          icon="person"
          label="ACCEDER" />

        <!--auth menu-->
        <q-btn-dropdown
          v-else
          dense
          color="primary"
        >
          <template v-slot:label>
            <q-avatar size="sm">
              <img :src="$store.state.auth.user.photoURL">
            </q-avatar>
          </template>

          <div class="row no-wrap q-pa-md">
            <div class="column items-center">
              <q-avatar size="72px">
                <img :src="$store.state.auth.user.photoURL">
              </q-avatar>

              <div class="text-subtitle1 q-mt-md q-mb-xs">{{$store.state.auth.user.displayName}}</div>

              <q-btn
                @click.prevent="signOut"
                color="primary"
                label="SALIR"
                push
                size="sm"
                v-close-popup
              />
            </div>
          </div>
        </q-btn-dropdown>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      draggable="false"
      class="bg-grey-1"
    >
      <q-item-section>
        <img
          class="shadow-logo img-menu q-mx-auto q-my-sm"
          src="~assets/quasar-logo-full.svg"
        />

        <q-toolbar-title class="text-center">
          {{$store.state.admin.title}}
        </q-toolbar-title>

        <q-item-label class="text-center text-weight-light q-mb-md">
          {{$store.state.admin.subtitle}}
        </q-item-label>
      </q-item-section>

      <hr>

      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import EssentialLink from '../components/EssentialLink.vue'
import firebase from 'firebase'
//import { signIn, signOut } from '../services/firebase'
//import { ref, onMounted, onBeforeUnmount } from 'vue'
//import { useRouter, useRoute } from 'vue-router'
//import { useStore } from 'vuex'
export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  setup() {
    const leftDrawerOpen = ref(false)
    const essentialLinks = ref([
      {
        title: 'Home',
        caption: 'Página web',
        icon: 'home',
        link: '/',
        exact: true,
        public: true
      },
      {
        title: 'Dashboard',
        caption: 'Panel de control',
        icon: 'dashboard',
        link: '/dash',
        public: false
      },
      {
        title: 'Clinica',
        caption: 'Historia clinica',
        icon: 'local_hospital',
        link: '/clinic',
        public: false
      },
      {
        title: 'Tienda',
        caption: 'Control de stock',
        icon: 'storefront',
        link: '/stock',
        public: false
      },
      {
        title: 'Calendario',
        caption: 'Agenda de turnos',
        icon: 'event',
        link: '/calendar',
        public: false
      },
    ])

    const signIn = () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(result => {
        console.log('signIn!', result)
        //useRouter.push({ path: '/dash' })
      }).catch(error => {
        alert(error)
      })
    }
    
    const signOut = () => {
      firebase.auth().signOut().then(result => {
        console.log('signOut!', result)
        //this.$router.replace('/')
      }).catch(error => {
        alert(error)
      })
    }

    return {
      signIn,
      signOut,
      essentialLinks,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style>
.img-menu{
  height: 120px
}
.shadow-logo{
  border-radius: 50%;
  box-shadow: 0 0 10px 2px rgb(0 0 0 / 20%), 0 0px 10px rgb(0 0 0 / 24%);
}
</style>