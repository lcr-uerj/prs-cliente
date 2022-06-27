<template>
  <div class="q-pt-lg row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-10 col-lg-10">
      <q-input v-model="customer.document" stack-label label="CPF" outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer.name" label="Nome" stack-label outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer.last_name" stack-label label="Sobrenome" outlined/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'InfoNameDocument',
  setup () {
    const customer = ref({
      document: '',
      name: '',
      last_name: ''
    })
    return {
      customer,
      aasd: ref('')
    }
  }
}
</script>

<style scoped>

</style>
