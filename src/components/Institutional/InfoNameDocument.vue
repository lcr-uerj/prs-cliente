<template>
  <form @submit.prevent="onSubmit">
    <div class="q-pt-lg row q-gutter-md justify-start">
      <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
        <q-input v-model="customer.document" stack-label label="CPF" outlined/>
      </div>
    </div>
      <div class="q-pt-lg row q-gutter-md justify-start">
      <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
        <q-input ref="nameRef" v-model="customer.name" lazy-rules :rules="nameRules" label="Nome" stack-label outlined/>
      </div>
      <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
        <q-input v-model="customer.last_name" stack-label label="Sobrenome" outlined/>
      </div>
    </div>
    <div>
      <q-btn label="Submit" type="submit" color="primary" />
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { UseCustomer } from 'stores/example-store'
import { useQuasar } from 'quasar'

export default {
  name: 'InfoNameDocument',
  setup () {
    const store = UseCustomer()
    const nameRef = ref(null)
    const customer = ref(store.customer)
    const $q = useQuasar()
    return {
      onSubmit () {
        nameRef.value.validate()
        if (nameRef.value.hasError) {
          // has error form
        } else {
          $q.notify({
            icon: 'done',
            color: 'positive',
            message: 'Submitted'
          })
        }
      },
      nameRules: [
        val => (val && val.length > 0) || 'Please type something'
      ],
      customer
    }
  }
}
</script>

<style scoped>

</style>
