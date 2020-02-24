/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */
const path = require('path')

module.exports = {
  mode: 'spa', // or 'universal'
  head: {
    title: 'passolusv2',
    script: [
	    {
        src: 'https://www.gstatic.com/firebasejs/7.8.2/firebase-app.js'
	    }
    ]
  },
  loading: false,
  plugins: [
    {ssr: true, src: '@/plugins/icons.js'},
    '~/plugins/firebase.js',    
  ],
 css: ['~/assets/scss/tailwind.scss'],

  modules: [
   'nuxt-purgecss'
  ],
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    }
  },
  purgeCSS: {
    mode: 'postcss'
  }
};
