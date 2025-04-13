import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4000' }),
    cache: new InMemoryCache(),
  });
};

export const apolloClient = createApolloClient();
