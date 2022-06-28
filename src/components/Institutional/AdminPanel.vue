<template>
  <h4 class="text-blue-grey">Painel Administrativo</h4>
  <div class="q-pt-md row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer.password" stack-label label="Senha" outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer.password_confirmation" stack-label label="Confirmar Senha" outlined/>
    </div>
    <p class="text-overline">
      Informe uma senha que será usada por você em futuro acesso ao Paniel do cliente para acompanhar suas vistorias, visualisar boletos, relatôrios e laudos. Use o CPF/CNPJ como login.<br/>
      Sua Senha deve ter no mínimo 6 caracteres
    </p>
  </div>
</template>

<script>
import { UseCustomer } from 'stores/example-store'

export default {
  name: 'AdminPanel',
  setup () {
    const store = UseCustomer()
    const customer = store.customer
    return {
      customer
    }
  }
}
</script>

<style scoped>

</style>
