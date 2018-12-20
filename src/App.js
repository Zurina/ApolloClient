import React from 'react';
import './App.css';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { GenericAll, FindUserByUsername } from './components/Queries'
import { AddUser, AddLocationBlog, LikeLocationBlog } from './components/Mutations'
import { GET_USERS, GET_POSITIONS, GET_LOCATIONBLOGS } from './statements/queries'

const client = new ApolloClient({
  uri: "https://mathiasbigler.com/MiniProjectJS/api/graphql"
});

function DisplayComponent({ category }) {
  switch (category) {
    case 'users':
      return <GenericAll statement={GET_USERS} />
    case 'positions':
      return <GenericAll statement={GET_POSITIONS} />
    case 'locationblogs':
      return <GenericAll statement={GET_LOCATIONBLOGS} />
    case 'finduser':
      return <FindUserByUsername />
    case 'adduser':
      return <AddUser />
    case 'addlocationblog':
      return <AddLocationBlog />
    case 'likelocationblog':
      return <LikeLocationBlog />
    default:
      return null;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: 'select'
    }
  }

  change = (event) => {
    this.setState({ category: event.target.value })
  }

  render() {
    return (
        <ApolloProvider client={client}>
          <section className="wrapper">
            <div className="inner">
              <header className="special">
                <h2>Miniproject Apollo Client Frontend</h2>
              </header>
              <div className="col-4">
                <select name="category" id="category" onChange={this.change} value={this.state.category}>
                  <option value="users">users</option>
                  <option value="positions">positions</option>
                  <option value="locationblogs">locationblogs</option>
                  <option value="finduser">finduser</option>
                  <option value="adduser">adduser</option>
                  <option value="addlocationblog">addlocationblog</option>
                  <option value="likelocationblog">likelocationblog</option>
                </select>
              </div>
              <DisplayComponent category={this.state.category} />
            </div>
          </section>
        </ApolloProvider>
    )
  }
}

export default App;
