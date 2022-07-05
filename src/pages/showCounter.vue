<template>
  <div class="flex flex-center">
    <p>
      Valor do contador: {{ counter.doubleCount }}
    </p>
  </div>
</template>

<script>
import { useCounterStore } from 'stores/test'
import { storeToRefs } from 'pinia'

export default ({
  name: 'IndexPage',
  setup () {
    const main = useCounterStore()
    const counter = storeToRefs(main)
    return {
      main,
      counter
    }
  }
})
</script>
