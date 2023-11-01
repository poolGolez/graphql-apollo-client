import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./App.css";
import { PatronList } from "./PatronList";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <PatronList />
      </div>
    </ApolloProvider>
  );
}

export default App;
