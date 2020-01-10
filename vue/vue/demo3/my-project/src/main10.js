import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
Vue.component('current-user', {
data(){
  return {
    usera: {
      firstName: 'lv',
      lastName: 'bo'
  }
  }
},
  template: `
  <span>
  <slot v-bind:user="usera">
    {{ usera.lastName }}
  </slot>
</span>
  `
})
Vue.component('current-users', {
  data(){
    return {
      usera: {
        firstName: 'lv',
        lastName: 'bo'
    }
    }
  },
    template: `
    <span>
    <slot v-bind:users="usera">
      {{ usera.lastName }}
    </slot>
  </span>
    `
  })
Vue.component('base-layout', {

    template: `
    <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
    `
  })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

