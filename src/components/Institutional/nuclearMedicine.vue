<template>
  <div class="q-pt-lg q-pb-md row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-9 col-lg-9">
      <q-input v-model="sdfsd" stack-label label="Matrícula CNEN" outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-3 col-lg-3">
      <q-input v-model="sdfsd" label="Autorização de operação nº:" stack-label outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-3 col-lg-3">
      <q-input v-model="sdfsd" label="Autorização de operação (Início da validade)" type="date" stack-label outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-3 col-lg-3">
      <q-input v-model="sdfsd" label="Autorização de operação (Término da Validade)" type="date" stack-label outlined/>
    </div>
  </div>
  <hr />
  <div class="q-pt-lg row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-10 col-lg-10">
      <q-input v-model="sdfsd" stack-label label="CNES nº:" outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="sdfsd" label="Alvará Sanitário" stack-label outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="sdfsd" stack-label label="Válido até" type="date" outlined/>
    </div>
    <div class="q-pa-sm rounded-borders">
      Tipó de atendimento realizado pelo SMN:
      <q-option-group
        name="accepted_genres"
        v-model="accepted"
        :options="options"
        type="checkbox"
        color="primary"
        inline
      />
    </div>
  </div>
    <div class="q-pt-lg q-pb-md row q-gutter-md justify-start">
      <div class="col-xs-10 col-sm-6 col-md-3 col-lg-3">
        <q-input v-model="sdfsd" stack-label label="Tipo de exame" placeholder="Terapia" outlined/>
      </div>
      <div class="col-xs-10 col-sm-6 col-md-3 col-lg-3">
        <q-input v-model="sdfsd" label="Radiofármaco utilizado" stack-label outlined/>
      </div>
      <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
        <q-input v-model="sdfsd" stack-label label="Nº de pacientes de acordo com o tipo de atendimento" outlined/>
      </div>
    </div>
    <hr />
  <div class="q-pt-lg row q-gutter-md justify-start">
    <div class="col-xs-10 col-sm-6 col-md-3 col-lg-3">
      <q-input v-model="sdfsd" stack-label label="Tipo de exame" placeholder="Diagnóstico" outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-3 col-lg-3">
      <q-input v-model="sdfsd" label="Radiofármaco utilizado" stack-label outlined/>
    </div>
    <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5">
      <q-input v-model="sdfsd" stack-label label="Nº de pacientes de acordo com o tipo de atendimento" outlined/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'nuclearMedicine',
  setup () {
    return {
      sdfsd: ref(''),
      accepted: ref([]),
      options: [
        {
          label: 'SUS',
          value: 'SUS'
        },
        {
          label: 'ANS',
          value: 'ANS'
        },
        {
          label: 'Particular',
          value: 'particular'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
