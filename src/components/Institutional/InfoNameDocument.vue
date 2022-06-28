<template>
  <div class="q-pt-lg row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-10 col-lg-10">
      <q-input v-model="customer.document" stack-label label="CPF" outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="evento.name" label="Nome" stack-label outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer.last_name" stack-label label="Sobrenome" outlined/>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { testActions } from 'stores/testFunction'
import { UseCustomer } from 'stores/example-store'

export default {
  name: 'InfoNameDocument',
  setup () {
    const story = UseCustomer()
    const store = testActions()
    const customer = story.customer
    const evento = ref([])

    onMounted(async () => {
      await store.preencerUsers()
      evento.value = store.evento
    })
    return {
      customer,
      evento,
      aasd: ref('')
    }
  }
}
</script>

<style scoped>

</style>
