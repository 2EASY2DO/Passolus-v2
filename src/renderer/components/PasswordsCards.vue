<template>
  <div class='bg-white border p-6 rounded-lg'>
    <h4>{{ passName }}</h4>
    <h4 v-model="password" >{{ password }}</h4>
    <button v-clipboard:copy="password" class="copy mt-4 p-2 rounded bg-blue-400" >Copy To Clipboard</button>
  </div>
</template>

<script>
  import clipboard from "../plugins/clipboard"
  export default {
   props: ['passName', 'password'],
  }
</script>
