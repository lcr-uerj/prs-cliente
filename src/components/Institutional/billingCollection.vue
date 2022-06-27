<template>
  <h4 class="text-blue-grey">Faturamento/Cobrança</h4>
  <div class="q-pt-lg q-pb-md row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-10 col-lg-10">
      <q-input v-model="customer" stack-label label="CNPJ" outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer" label="Razão Social" stack-label outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer" stack-label label="Nome Fantasia" outlined/>
    </div>
  </div>
  <hr />
  <div class="q-pt-lg q-pb-md row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-10 col-lg-10">
      <q-input v-model="customer" stack-label label="CEP" outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer" label="Município" stack-label outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer" stack-label label="Bairro/Destrito" outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer" label="Logradouro (Rua, Avenida ou etc)" stack-label outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer" stack-label label="Número" outlined/>
    </div>
  </div>
  <hr />
  <div class="q-pt-lg row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-10 col-lg-10">
      <q-input v-model="customer" stack-label label="Nome do contato" outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer" label="Telefone/Celular" stack-label outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer" stack-label label="Email" outlined/>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'billingCollection',
  setup () {
    const customer = reactive({
      asdads: ''
    })
    return {
      customer
    }
  }
}
</script>

<style scoped>

</style>
