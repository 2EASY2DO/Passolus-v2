/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */


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
  buildModules: [
    
  ],
  modules: [
    
  ],
};
