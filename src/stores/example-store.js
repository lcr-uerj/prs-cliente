import { defineStore } from 'pinia'

export const UseCustomer = defineStore('piape', {
  state: () => {
    return {
      customer: {
        type: '',
        name: '',
        document: '',
        last_name: '',
        fantasy_name: '',
        password: '',
        password_confirmation: '',
        nature: '',
        state_registration: '',
        municipal_registration: '',
        hasNuclearMedicine: false,
        hasBillingCompany: false
      }
    }
  }
})

export const userActions = defineStore('base', {
  state: () => {
    return {
      evento: {}
    }
  },
  actions: {
    async preencerUsers () {
      const request = await fetch('https://reqres.in/api/unknown/2')
      const { data } = await request.json()
      this.evento = data
    }
  }
})
