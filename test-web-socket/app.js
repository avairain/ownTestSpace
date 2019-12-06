import  { Server } from 'ws'

const ws = new Server({
  port: 8880
})

ws.on('connection', ws => {
  console.log('connection')
  ws.send(`connectioned!!!`, err => {
    console.log(err)
  })
  ws.on('message', message => {
    console.log(message)
    ws.send(`{a: 'a'}`, err => {
      console.log(err)
    })
  })
  ws.on('close', () => {
    console.log('close')
  })
})
