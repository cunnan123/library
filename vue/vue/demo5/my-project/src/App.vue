<template>
  <div id="app" class="divbox1">
    <div class="divbox2">
      <div class="tabIndex">
        <router-link to="/demo1/22222" class="tabIndex-a">go to demo1</router-link>
        <router-link to="/demo2" class="tabIndex-a">go to demo2</router-link>
        <router-link to="/demo3" class="tabIndex-a">go to demo3</router-link>
        <router-link to="/demo4" class="tabIndex-a">go to demo4</router-link>
        <router-link to="/demo5" class="tabIndex-a">go to demo5</router-link>
        <router-link to="/demo6" class="tabIndex-a">go to demo6</router-link>
      </div>
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
        return {
            transitionName:'slide-left'
        }
    },
    watch: {
        '$route'(to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
  }

</script>

<style>
  .divbox1 {
    position: relative;
    width: 100%;
    height: 600px;
  }

  .divbox2 {
    position: absolute;
    width: 80%;
    height: 500px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid red;
  }

  .tabIndex {
    display: flex;
    justify-content: space-around;
    border: 2px solid red;
  }

  .tabIndex-a {
    color: blue;
    font-size: 1rem;
  }

</style>
