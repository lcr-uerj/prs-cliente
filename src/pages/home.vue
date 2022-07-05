<template>
  <div>
    <router-link to="/second">Outra Página</router-link>
  </div>
  <div>
    <q-btn @click="main.increment" icon="add" />
    <q-btn @click="main.decrement" icon="remove" />
    <p>
      Valor do contador: {{ counter.doubleCount }}
    </p>
  </div>
</template>

<script>
import { useCounterStore } from 'stores/test'
import { storeToRefs } from 'pinia'
export default {
  name: 'homePage',
  setup () {
    const main = useCounterStore()
    const counter = storeToRefs(main)
    return {
      main,
      counter
    }
  }
}
</script>

<style scoped>

</style>
