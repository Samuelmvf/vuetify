import { api } from "@/boot/axios"

const getAll = () => {
  return api.get("/users")
}

const saveOrUpdate = (user) => {
  return api.post("/users", { user })
}

const deleteById = (id) => {
  return api.delete(`/users/${id}`)
}

export default {
  deleteById,
  getAll,
  saveOrUpdate
}