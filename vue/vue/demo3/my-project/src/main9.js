import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
Vue.component('text-document', {
  props: ['title'],
  data(){
    return {newTitle:"newtitle"}
  },
  template: `
    <div>
      <h3>{{ title }}</h3>
      <button v-on:click="$emit('update:title', newTitle)">
        update:title
      </button>
    </div>
    
  `
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

