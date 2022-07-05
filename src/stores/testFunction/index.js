import { defineStore } from 'pinia'
import state from './state'
import actions from './actions'

export const testActions = defineStore('base', {
  state,
  actions
})

/*
export const testDentro = defineStore('test', {
  state: () => {
    return {
      nome: 'Carlos'
    }
  }
})
*/
