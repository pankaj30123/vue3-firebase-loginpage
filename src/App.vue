<template>
  <div id="app">
    <div id="nav" v-if="$store.state.user">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button @click="$store.dispatch('logout')">Logout</button>
    </div>
    <router-view />
    <div v-if="user" class="user-details">
      <p class="user-name">{{ user.name }}</p>
      <p class="user-email">{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, computed } from "vue";   
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();   

    const user = computed(() => store.state.user);  

    onBeforeMount(async () => {
      await store.dispatch("fetchUser");
    });

    return {
      user,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;  
  color: #2c3e50;     
}

#nav {
  padding: 30px; 
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #eb34d5;
}

#app {
  position: relative; 

}

.user-details {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);   
  z-index: 1000;
}

.user-name {
  font-weight: bold;
  font-size: 1.2rem;
}

.user-email {
  font-size: 1rem;
  color: #333;
}
</style>        




