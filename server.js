import { createServer, Model, Response } from 'miragejs'

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
          adress: 'Av. Contagem, 1305 - Santa Inês',
          phone: '(31) 3486-9922',
          login: 'marcelle.samara',
          email: 'marcelle.samara@gmail.com',
          password: undefined
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/users', () => {
      return this.schema.all('user');
    });
    this.post('/users', (schema, request) => {
      // eslint-disable-next-line
      debugger

      const requestBody = JSON.parse(request.requestBody)
      const { user } = requestBody

      const userRules = {
        fullName: !!user.fullName,
        adress: !!user.adress,
        phone: !!user.phone,
        login: !!user.login,
        email: !!user.email,
        password: !!user.password
      }

      const isValidUser = Object.values(userRules).every(val => val)

      if (isValidUser) {
        return schema.create('user', user);
      }

      return new Response(403, { some: 'header' }, { error: ['Invalid user data'] });
    })

  }
})