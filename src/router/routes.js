import HomePage from '@/components/pages/HomePage'
import CadastroUsuario from '@/components/users/CadastroUsuario'
import ListaUsuarios from '@/components/users/ListaUsuarios'
import InformacoesPrincipais from '@/components/InformacoesPrincipais'

const routes = [
  {
    path: "/",
    component: HomePage,
    children: [
      {
        path: "/",
        name: "home",
        component: InformacoesPrincipais,
      },
      {
        path: "/cadastro-usuarios",
        name: "cadastrarUsuarios",
        component: CadastroUsuario
      },
      {
        path: "/lista-usuarios",
        name: "listaUsuarios",
        component: ListaUsuarios
      }
    ]
  },
  {
    path: "*",
    component: HomePage,
    beforeEnter: (_to, _from, next) => {
      next({ path: "/" })
    },
  }
]

export default routes
