import { buildSchema } from 'graphql'

export default buildSchema(`
    type Customer {
        id: String!
        name: String!
        email: String!
        age: Int!
    }

    input CustomerCreateData {
        email: String!
        name: String!
        age: Int!
    }

    input CustomerUpdateData {
        id: String!
        email: String
        name: String
        age: Int
    }

    type RootQuery {
        customer(id: String!): Customer!
        customers: [Customer!]!
    }

    type RootMutation {
        addCustomer(data: CustomerCreateData): Customer!
        deleteCustomer(id: String!): Boolean
        updateCustomer(data: CustomerUpdateData): Customer!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)