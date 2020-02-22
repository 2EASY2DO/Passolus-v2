<template>
  <div>
    <div v-if="authenticatedUser">
      <Dashboard authenticatedUser=authenticatedUser></Dashboard>
    </div>
    <div v-else>
      <input type="radio" id="hasAccount" :value="false" v-model="needsAccount" />
      <label for="hasAccount">I have an account</label>
      <br />
      <input type="radio" id="needsAccount" :value="true" v-model="needsAccount" />
      <label for="needsAcctouns">I need an account</label>
      <form @submit.prevent="loginOrRegister">
        <input type="email" v-model="email" placeholder="Your email address" />
        <input type="password" v-model="password" placeholder="Your password" />
        <button v-text="needsAccount ? 'Register' : 'Login'" />
      </form>
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
         alert('password same and registrating')
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
    },
    login() {
            alert(this.email, this.password)
            alert('loggin in')
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
