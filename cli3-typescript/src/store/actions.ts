
export const actionsHelloWord: ACTIONS.actionsHelloWord =  ({commit}: ACTIONS.context, payload: ACTIONS.payload) => {
  console.log('dispatch actionsHelloWord')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      commit('mutationsHelloWord', payload)
      resolve()
    }, 3000)
  })
}

export const actionsMsg: ACTIONS.actionsHelloWord =  ({commit}: ACTIONS.context, payload: ACTIONS.payload) => {
  console.log('dispatch actionsMsg')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      commit('mutationsMsg', payload)
      resolve()
    }, 3000)
  })
}
