import { createServer, Model } from 'miragejs'

createServer({
  models: {
    user: Model
  },
  seeds(server) {
    server.db.loadData({
      users: [
        {
          id: "1",
          fullName: 'Samuel Maia Verçosa Ferreira',
          adress: 'Av. Contagem, 1305 - Santa Inês',
          phone: '(31) 3486-9922',
          login: 'samuel.maia',
          email: 'samuel.maia@gmail.com',
          password: undefined
        },
        {
          id: "2",
          fullName: 'Marcelle Samara',
          adress: 'Av. Contagem, 1310 - Santa Inês',
          phone: '(31) 3486-9922',
          login: 'marcelle.samara',
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
    });

    this.post('/users', (schema, request) => {
      const requestBody = JSON.parse(request.requestBody)
      const { user } = requestBody

      return schema.create('user', user);
    })

  }
})