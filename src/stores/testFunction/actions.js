const actions = {
  async preencerUsers () {
    const request = await fetch('https://reqres.in/api/unknown/2')
    const { data } = await request.json()
    this.evento = data
  }
}

export default { ...actions }
