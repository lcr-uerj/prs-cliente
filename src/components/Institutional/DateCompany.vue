<template>
  <div class="q-pt-lg row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer.document" stack-label label="CNPJ" placeholder="Somente números" outlined/>
    </div>
  </div>
    <div class="q-pt-lg row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer.name" label="Razão Social" stack-label maxlength="200" outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer.fantasy_name" stack-label label="Nome Fantasia" maxlength="200" outlined/>
    </div>
  </div>
  <div class="q-pt-lg row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-select outlined v-model="customer.nature" stack-label :options="options" label="Natureza">
        <template v-if="customer.nature" v-slot:append>
          <q-icon name="cancel" @click.stop="customer.nature = null" class="cursor-pointer" />
        </template>
      </q-select>
    </div>
  </div>
    <div class="q-pt-lg q-pb-md row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer.state_registration" label="Inscrição Estadual" maxlength="15" placeholder="Caso não tenha, coloque INSENTO" stack-label outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="customer.municipal_registration" stack-label label="Inscrição Municipal" maxlength="15" outlined/>
    </div>
  </div>
  <hr>
  <div class="q-mt-md">
    <div>
      <q-checkbox v-model="customer.hasNuclearMedicine" size="lg" label="Possui serviço de medicina nuclear?" />
      <div v-if="customer.hasNuclearMedicine === true">
        <nuclear-medicine></nuclear-medicine>
      </div>
    </div>
    <div>
      <q-checkbox v-model="customer.hasBillingCompany" size="lg" label="Marque e preencha caso a instituição tenha outra empresa responsável por faturamento e cobrança." />
      <div v-if="customer.hasBillingCompany === true">
        <billing-collection></billing-collection>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import NuclearMedicine from 'components/Institutional/nuclearMedicine.vue'
import BillingCollection from 'components/Institutional/billingCollection.vue'
import { UseCustomer } from 'stores/example-store'

export default {
  name: 'DateCompany',
  components: { BillingCollection, NuclearMedicine },
  setup () {
    const store = UseCustomer()
    const customer = store.customer
    return {
      customer,
      right: ref(false),
      aasd: ref(''),
      options: [
        'ONG', 'Público', 'Particular'
      ]
    }
  }
}
</script>

<style scoped>

</style>
