<template>
  <div v-if="authenticatedUser">
    <p>You are logged in as {{ authenticatedUser.email }}.</p>
    <p>Logout?</p>
    <button class="border-solid border-4 border-teal-600 text-white bg-green-500" @click.prevent="logout">Logout</button>
  </div>
</template>
<script>
  import firebase from 'firebase'
  export default {
  methods: {
     logout() {
      firebase.auth().signOut()
    }
  },
     props: ['authenticatedUser']
  }
</script>
<style>
</style>
