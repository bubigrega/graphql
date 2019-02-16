import "@babel/polyfill/noConflict"
import "cross-fetch/polyfill"
import ApolloClient, {
    gql
} from 'apollo-boost'


const client = new ApolloClient({
    uri: 'http://localhost:4000'
})

test('Should create new User in database', async () => {
    const createUser = gql `
        mutation {
            createUser(
                 data: {
                name: "Gregor",
                email: "gregor@test.si",
                password: "aansssa"
            }
            ){
                token,
                user {
                    id
                }
            }
        }
    `

    const response = await client.mutate({
        mutation: createUser
    })
})