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
      },
      payer: {
        cnpj: '57203519000194',
        name: 'Empresa pagadora',
        city_id: 68,
        neighborhood: 'Barra',
        zip_code: '12345-587',
        street: 'Rua do pagador',
        number: '472',
        contact_name: 'Renato Silveira',
        contact_telephone: '25896589',
        contact_email: 'jeangomes.ti@gmail.com'
      },
      nuclear: {
        cnen_registration: '57203519000194',
        operation_authorization_number: '199058',
        operation_authorization_start: '2022-05-23',
        operation_authorization_end: '2022-10-25',
        cnes_number: '10405',
        sanitary_permit: '57203519000194',
        sanitary_permit_expiry_date: '2023-05-02',
        type_service: ['SUS', 'ANS'],
        exam_type: [
          { type: 'Terapia', radiofarmaco: '', patients_number: '' },
          { type: 'Diagnóstico', radiofarmaco: '', patients_number: '' }
        ]
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
