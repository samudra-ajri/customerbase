import axios from "axios"

export default {
    customer: async function ({ id }) {
        return axios.get(`http://localhost:3000/customers/${id}`)
        .then(res => res.data)
    },
    customers: async function () {
        return axios.get('http://localhost:3000/customers')
        .then(res => res.data)
    },
    addCustomer: async function ({ data }) {
        return axios.post('http://localhost:3000/customers', { 
            email: data.email, 
            name: data.name, 
            age: data.age 
        })
        .then(res => res.data)
    },
    deleteCustomer: async function ({ id }) {
        return axios.delete(`http://localhost:3000/customers/${id}`)
        .then(res => true)
    },
    updateCustomer: async function ({ data }) {
        return axios.patch(`http://localhost:3000/customers/${data.id}`, { 
            id: data.id,
            email: data.email, 
            name: data.name, 
            age: data.age 
        })
        .then(res => res.data)
    },
}