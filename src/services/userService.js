import { api } from "@/boot/axios"

const getAll = () => {
  return api.get("/users")
}

const saveOrUpdate = (user) => {
  return api.post("/users", { user })
}

export default {
  getAll,
  saveOrUpdate
}