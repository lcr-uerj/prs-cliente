<template>
  <date-company></date-company>
  <admin-panel></admin-panel>
</template>

<script>
import AdminPanel from 'components/Institutional/AdminPanel.vue'
import DateCompany from 'components/Institutional/DateCompany.vue'
export default {
  name: 'panelCompany',
  components: {
    AdminPanel,
    DateCompany
  }

}
</script>

<style scoped>

</style>
