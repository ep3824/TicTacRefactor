import * as serviceWorker from './serviceWorker';
import React from 'react';
import { render } from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Board from './components/Board'
import './index.css';
// import App from './App';
const client = new ApolloClient({
  uri: "/ethanEndpoint"
});


// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <div>
//     <App />,
//     document.getElementById('root')
//     </div>
//   </ApolloProvider>
// );


const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <Board />
    </div>
  </ApolloProvider>
)

export default App;


render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
