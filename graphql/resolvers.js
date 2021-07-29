import axios from "axios"

const resolvers = {
    customer: async function ({ id }) {
        return axios.get(`http://localhost:3000/customers/${id}`)
            .then(res => res.data)
    }
}

export default resolvers