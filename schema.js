import { 
    GraphQLObjectType, 
    GraphQLSchema, 
    GraphQLInt, 
    GraphQLString, 
    GraphQLNonNull, 
    GraphQLList
} from 'graphql'

// Hardcode data
const Customers = [
    {id: '1', name: 'John Doe', emai: 'jdoe@gmail.com', age: 35},
    {id: '2', name: 'Stive Smith', emai: 'steve@gmail.com', age: 25},
    {id: '3', name: 'Sara Jones', emai: 'sara@gmail.com', age: 31},
]

// Customer Type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        customer: {
            type: CustomerType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parentValue, args) {
                for(let i = 0; i < Customers.length; i++) {
                    if (Customers[i].id == args.id) {
                        return Customers[i]
                    }
                }
            }
        },
        customers: {
            type: new GraphQLList(CustomerType),
            resolve(parentValue, args) {
                return Customers
            }
        }
    }
})

export default new GraphQLSchema({
    query: RootQuery
})