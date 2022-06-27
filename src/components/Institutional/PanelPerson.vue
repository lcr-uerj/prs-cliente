<template>
  <div class="q-pt-lg q-gutter-xs justify-start">
    <div>
      <Info-name-document></Info-name-document>
    </div>
  </div>
  <div class="q-pt-lg row q-gutter-xs justify-start">
    <div>
      <AdminPanel></AdminPanel>
    </div>
  </div>
</template>

<script>
import AdminPanel from 'components/Institutional/AdminPanel.vue'
import InfoNameDocument from 'components/Institutional/InfoNameDocument.vue'
export default {
  name: 'panelPerson',
  components: {
    AdminPanel,
    InfoNameDocument
  },
  setup () {
    return {}
  }
}
</script>

<style scoped>

</style>
