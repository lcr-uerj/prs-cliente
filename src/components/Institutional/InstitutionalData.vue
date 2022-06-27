<template>
  <div class="q-pa-md">
    <div class="q-px-sm">
      Para começar, selecione seu perfil:
    </div>
    <div class="q-gutter-sm">
      <q-radio v-model="customer.type" val="2" label="Pessoa Jurídica" />
      <q-radio v-model="customer.type" val="1" label="Pessoa Física" />
      <div v-if="customer.type.valueOf() === '2'">
        <panel-company></panel-company>
      </div>
      <div v-if="customer.type.valueOf() === '1'">
        <panel-person></panel-person>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import panelPerson from 'components/Institutional/PanelPerson.vue'
import panelCompany from 'components/Institutional/PanelCompany.vue'

export default {
  name: 'InstitutionalData',
  components: {
    panelCompany,
    panelPerson
  },
  setup () {
    const customer = ref({
      type: ''
    })
    return {
      customer,
      shape: ref('')
    }
  }
}
</script>

<style scoped>

</style>
