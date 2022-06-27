<template>
    <div class="q-pa-md">
      <div>
        <h3>
          Cadastro
        </h3>
      </div>
      <q-stepper
        v-model="step"
        ref="stepper"
        color="primary"
        active-color="deep-orange-10"
        animated
        done-color="secondary"
        inactive-color="primary"
        keep-alive
      >
        <q-step
          :name="1"
          title="Dados institucionais"
          prefix="1"
          :done="step > 1"
        >
          <div class="q-pb-md" style="font-size: 20px">
            <PageTitle>
              Dados da instituição a ser vistoriada
            </PageTitle>
          </div>
          <institutional-data></institutional-data>
          <q-stepper-navigation>
            <div class="row justify-end">
              <q-btn color="deep-orange-7" label="Continuar" @click="$refs.stepper.next()" />
            </div>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Endereço"
          prefix="2"
          :done="step > 2"
        >
          <div class="q-pb-md" style="font-size: 20px">
            <PageTitle>
              Dados da instituição a ser vistoriada
            </PageTitle>
          </div>
          An ad group contains one or more ads which target a shared set of keywords.
          <q-stepper-navigation>
            <div class="row justify-end">
              <q-btn class="q-mr-sm" color="deep-orange-7" flat label="Voltar" @click="$refs.stepper.previous()"/>
              <q-btn color="deep-orange-7" label="Continuar" @click="$refs.stepper.next()" />
            </div>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="Equipe responsável"
          prefix="3"
          :done="step > 3"
        >
          <div class="q-pb-md" style="font-size: 20px">
            <PageTitle>
              Dados da instituição a ser vistoriada
            </PageTitle>
          </div>
          This step won't show up because it is disabled.
          <q-stepper-navigation>
            <div class="row justify-end">
              <q-btn class="q-mr-sm" color="deep-orange-7" flat label="Voltar" @click="$refs.stepper.previous()"/>
              <q-btn color="deep-orange-7" label="Continuar" @click="$refs.stepper.next()" />
            </div>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="4"
          title="Visita"
          prefix="4"
          :done="step > 4"
        >
          <div class="q-pb-md" style="font-size: 20px">
            <PageTitle>
              Dados da instituição a ser vistoriada
            </PageTitle>
          </div>
          Try out different ad text to see what brings in the most customers, and learn how to
          enhance your ads using features like ad extensions. If you run into any problems with
          your ads, find out how to tell if they're running and how to resolve approval issues.
          <q-stepper-navigation>
            <div class="row justify-end">
              <q-btn class="q-mr-sm" color="deep-orange-7" flat label="Voltar" @click="$refs.stepper.previous()"/>
              <q-btn color="deep-orange-7" label="Continuar" @click="$refs.stepper.next()" />
            </div>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="5"
          title="Equipamento"
          prefix="5"
        >
          <div class="q-pb-md" style="font-size: 20px">
            <PageTitle>
              Dados da instituição a ser vistoriada
            </PageTitle>
          </div>
          Try out different ad text to see what brings in the most customers, and learn how to
          enhance your ads using features like ad extensions. If you run into any problems with
          your ads, find out how to tell if they're running and how to resolve approval issues.
          <q-stepper-navigation>
            <div class="row justify-end">
              <q-btn class="q-mr-sm" color="deep-orange-7" flat label="Voltar" @click="$refs.stepper.previous()"/>
              <q-btn color="deep-orange-7" label="voltar" @click="$refs.stepper.previous()" />
            </div>
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </template>

<script>
import { ref } from 'vue'
import PageTitle from 'components/pageTitle.vue'
import InstitutionalData from 'components/Institutional/InstitutionalData.vue'

export default {
  name: 'IndexPage',
  components: { PageTitle, InstitutionalData },
  setup () {
    return {
      step: ref(1)
    }
  }
}
</script>

<style scoped>

</style>
