import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import graphQLSchema from './graphql/schema.js'
import graphQLResolvers from './graphql/resolvers.js'

const app = express()

app.use(
    '/graphql',
    graphqlHTTP({
        schema: graphQLSchema,
        rootValue: graphQLResolvers,
        graphiql: true,
    }),
)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`))
