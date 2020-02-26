<template>
  <div v-if="authenticatedUser">
    <p>You are logged in as {{ authenticatedUser.email }}.</p>
    <p>Logout?</p>
    <button class="border-solid border-4 border-teal-600 text-white
                   bg-green-500" @click.prevent="logout">Logout</button>
    <form @submit.prevent="write">
      <input v-model="passName" type="text" name="passName" value="text" />
      <input v-model="text" type="text" name="text" value="text" />
      <button> Write to database</button>
    </form>
    <ul>
      <li v-for="password in passwords">
        <span v-text="password.site"></span>
        <p>Password:</p>
        <span v-text="password.password"></span>
      </li>
    </ul>
    <button @click.prevent="read">Read</button>
  </div>
</template>
<script>
  import { db } from '../plugins/firebase'
  import firebase from 'firebase'
  export default {
   name: 'app',
   data(){
    return {
      user: firebase.auth().currentUser,
      text: '',
      passwords: [],
      passName: ''
    }
  },
  firestore() {
   return {
    passwords: db.collection(this.user.uid),
   }
  },
  methods: {
     logout() {
      firebase.auth().signOut()
     },
     write: function() {
      db.collection(this.user.uid).doc(this.passName).set(
       {
        user: this.user.email,
        site: this.passName,
        password: this.text,
        timestamps: new Date()
       }
     );
     this.text = '';
     }
   },
  props: ['authenticatedUser']
}
</script>
<style>
</style>
