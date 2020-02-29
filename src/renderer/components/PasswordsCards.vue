<template>
  <div class='bg-gray-300 border p-6 rounded-lg'>
    <h4>{{ passName }}</h4>
    <h4>{{ password }}</h4>
    <button>Copy To Clipboard</button>
  </div>
</template>

<script>
  export default {
   props: ['passName', 'password'],
  }
</script>
