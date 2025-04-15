import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3001/",
})

const getAllContacts = () => {
    const request = api.get("persons")
    return request.then((response) => response.data)
}

const addContact = (newContact) => {
    const request = api.post("persons", newContact)
    return request.then((response) => response.data)
}

const deleteContact = (id) => {
    const request = api.delete(`persons/${id}`)
    return request.then((response) => response.data)
}

const updateContact = (id, updatedContact) => {
    const request = api.put(`persons/${id}`, updatedContact)
    return request.then((response) => response.data)
}

export default {
    getAllContacts,
    addContact,
    deleteContact,
    updateContact,
}
