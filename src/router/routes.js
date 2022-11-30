import HomePage from '@/components/pages/HomePage'
import UserRegister from '@/components/users/UserRegister'
import UserList from '@/components/users/UserList'
import PrimaryInformation from '@/components/PrimaryInformation'

const routes = [
  {
    path: "/",
    component: HomePage,
    children: [
      {
        path: "/",
        name: "home",
        component: PrimaryInformation,
      },
      {
        path: "/user/register",
        name: "userRegister",
        component: UserRegister
      },
      {
        path: "/user/list",
        name: "userList",
        component: UserList
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
