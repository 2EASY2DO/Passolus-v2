<template>
<div v-if="authenticatedUser">
    <div class="p-4 flex items-center justify-around">
     <p>You are logged in as <span class="text-red-500">{{ authenticatedUser.email }}</span>.</p>
     <button class="p-1 text-white rounded-sm bg-teal-500" @click.prevent="logout">Logout</button>
    </div>
    <div class="flex justify-center">
      <form @submit.prevent="write">
      <input class="border border-red-500" v-model="passName" type="text"
      name="passName" value="text" placeholder="Name of site?"/>
      <input class="border border-red-500" v-model="text" type="text"
      name="text" value="text" placeholder="Password to save?"/>
      <button class="p-1 text-white rounded-sm bg-red-500" >Save</button>
    </form>
    </div>
    <div class='p-6 flex items-center justify-around'>
      <PasswordsCards v-for="password in passwords" :password='password.password' :passName='password.site'></PasswordsCards>
    </div>
  </div>
</template>

<script>
  import PasswordsCards from '@/components/PasswordsCards'
  import { db } from '../plugins/firebase'
  import firebase from 'firebase'
  export default {
   name: 'app',
   components: {
    PasswordsCards
   },
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
