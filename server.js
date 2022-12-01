import { createServer, Model } from 'miragejs'

const GET_ALL_MS = 500
const POST_PUT_MS = 500

createServer({
  models: {
    user: Model
  },
  seeds(server) {
    server.db.loadData({
      users: [
        {
          id: "1",
          fullName: 'Samuel Maia',
          adress: 'Av. Contagem, 1305 - Santa Inês',
          phone: '(31) 3486-9922',
          login: 'samuelmvf',
          iconId: 6,
          email: 'samuelmvf@gmail.com',
          password: undefined
        },
        {
          id: "2",
          fullName: 'Marcelle Samara',
          adress: 'Av. Contagem, 1310 - Santa Inês',
          phone: '(31) 3486-9922',
          login: 'marcelle.samara',
          iconId: 3,
          email: 'marcelle.samara@gmail.com',
          password: undefined
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/users', () => {
      return this.schema.all('user')
    }, { timing: GET_ALL_MS});

    this.post('/users', (schema, request) => {
      const requestBody = JSON.parse(request.requestBody)
      const { user } = requestBody
      return schema.create('user', user);
    }, { timing: POST_PUT_MS})

  }
})