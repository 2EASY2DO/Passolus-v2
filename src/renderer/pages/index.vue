<template>
  <div>
    <div v-if="authenticatedUser">
      <Dashboard :authenticatedUser='authenticatedUser'></Dashboard>
    </div>
    <div v-else>
      <div class='flex items-center justify-around'>
        <img src="@/assets/Passolus2.png" height='198' width='198'>
      </div>
      <div class='py-4 flex items-center justify-around'>
        <form @submit.prevent="loginOrRegister">
        <input class="placeholder-red-400 rounded-sm  border border-red-500" type="email" v-model="email" placeholder="Your email address" />
        <input class="placeholder-red-400 rounded-sm border border-red-500" type="password" v-model="password" placeholder="Your password" />
        <button class="text-white rounded-sm p-1 bg-red-500" v-text="needsAccount ? 'Register' : 'Login'" />
        </form>
      </div>
      <br />
      <div class='flex items-center justify-around'>
        <div class="text-teal-500">
          <input type="radio" id="hasAccount" :value="false" v-model="needsAccount" />
          <label class="text-center"for="hasAccount">I have an account</label>
        </div>
      </div>
       <div class='flex items-center justify-around'>
        <div class="text-teal-500">
           <input type="radio" id="needsAccount" :value="true" v-model="needsAccount" />
           <label class="text-center" for="needsAcctouns">I need an account</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Dashboard from '@/pages/Dashboard'
import firebase from 'firebase'

export default {
  name: 'Login',
  asyncData() {
    return {
      authenticatedUser: null,
      email: '',
      password: '',
      registrationPassword: '',
      needsAccount: true
    }
  },
  methods: {
    register() {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
    },
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    },
    loginOrRegister() {
      if (this.needsAccount) {
        this.register()
      } else {
        this.login()
      }
    },
    logout() {
      firebase.auth().signOut()
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => (this.authenticatedUser = user))
  },
  components:{
     'Dashboard': Dashboard
  }
}
</script>
<style>
</style>
