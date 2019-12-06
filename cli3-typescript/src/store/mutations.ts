
export const mutationsHelloWord: MUTATIONS.helloWord = (state: MUTATIONS.state, payload: MUTATIONS.payload) => {
  console.log('mutationsHelloWord')
  return state.helloWord = payload.amount
}

export const mutationsMsg: MUTATIONS.msg = (state: MUTATIONS.state, payload: MUTATIONS.payload) => {
  console.log('mutationsMsg')
  console.log(payload)
  return state.helloWordMsg = payload.amount
}
