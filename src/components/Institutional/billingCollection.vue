<template>
  <h4 class="text-blue-grey">Faturamento/Cobrança</h4>
  <div class="q-pt-lg row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="payer.cnpj" stack-label label="CNPJ" outlined/>
    </div>
  </div>
    <div class="q-pt-lg q-pb-md row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="payer.name" label="Razão Social" stack-label outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="payer.name" stack-label label="Nome Fantasia" outlined/>
    </div>
  </div>
  <hr />
  <div class="q-pt-lg row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="payer.zip_code" stack-label label="CEP" outlined/>
    </div>
  </div>
    <div class="q-pt-lg q-pb-md row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="payer.neighborhood" label="Município" stack-label outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="payer.street" stack-label label="Bairro/Destrito" outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="payer.street" label="Logradouro (Rua, Avenida ou etc)" stack-label outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="payer.number" stack-label label="Número" outlined/>
    </div>
  </div>
  <hr />
  <div class="q-pt-lg row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="payer.contact_name" stack-label label="Nome do contato" outlined/>
    </div>
  </div>
    <div class="q-pt-lg row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="payer.contact_telephone" label="Telefone/Celular" stack-label outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="payer.contact_email" stack-label label="Email" outlined/>
    </div>
  </div>
</template>

<script>
import { UseCustomer } from 'stores/example-store'

export default {
  name: 'billingCollection',
  setup () {
    const store = UseCustomer()
    const payer = store.payer
    return {
      payer
    }
  }
}
</script>

<style scoped>

</style>
